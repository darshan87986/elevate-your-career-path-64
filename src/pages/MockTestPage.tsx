
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { getMockTestById, getQuestionsByTestId } from "@/data/mockTests";
import { MockTest, Question } from "@/types";
import { Timer, ChevronRight, ChevronLeft, AlertCircle } from "lucide-react";

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const MockTestPage = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const { updateUserPoints } = useAuth();
  
  const [test, setTest] = useState<MockTest | undefined>(undefined);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | undefined>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0, total: 0 });
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (testId) {
      const testData = getMockTestById(testId);
      if (testData) {
        setTest(testData);
        setTimeLeft(testData.timeInMinutes * 60);
      } else {
        navigate("/mock-tests");
      }
      
      const questionsData = getQuestionsByTestId(testId);
      if (questionsData) {
        setQuestions(questionsData);
      }
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [testId, navigate]);

  useEffect(() => {
    if (testStarted && timeLeft !== null && !testCompleted) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev !== null && prev <= 1) {
            clearInterval(timerRef.current!);
            handleEndTest();
            return 0;
          }
          return prev !== null ? prev - 1 : null;
        });
      }, 1000);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [testStarted, testCompleted]);

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleSelectAnswer = (questionId: number, answerIndex: number) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleEndTest = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    setTestCompleted(true);
    
    // Calculate score
    let correctCount = 0;
    let incorrectCount = 0;
    
    questions.forEach((question) => {
      const userAnswer = answers[question.id];
      if (userAnswer !== undefined) {
        if (userAnswer === question.correctAnswer) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }
    });
    
    setScore({
      correct: correctCount,
      incorrect: incorrectCount,
      total: questions.length
    });
    
    // Award points based on performance
    if (test) {
      const percentageScore = (correctCount / questions.length) * 100;
      let earnedPoints = 0;
      
      if (percentageScore >= 80) {
        earnedPoints = test.pointsReward;
      } else if (percentageScore >= 60) {
        earnedPoints = Math.floor(test.pointsReward * 0.7);
      } else if (percentageScore >= 40) {
        earnedPoints = Math.floor(test.pointsReward * 0.4);
      } else {
        earnedPoints = Math.floor(test.pointsReward * 0.2);
      }
      
      updateUserPoints(earnedPoints);
      
      toast({
        title: "Test Completed!",
        description: `You've earned ${earnedPoints} points for completing this test.`
      });
    }
  };

  if (!test || questions.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {!testStarted ? (
            <Card className="p-6">
              <h1 className="text-2xl font-bold text-center mb-4">{test.title}</h1>
              <div className="mb-6 text-center">
                <p className="text-gray-600">{test.description}</p>
                <div className="flex justify-center gap-8 mt-4">
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 mr-2 text-gray-500" />
                    <span>{test.timeInMinutes} minutes</span>
                  </div>
                  <div>
                    <span>{test.questionCount} questions</span>
                  </div>
                </div>
              </div>
              
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  This test is timed. Once you click "Start Test", you'll have {test.timeInMinutes} minutes to complete all questions.
                </AlertDescription>
              </Alert>
              
              <Button className="w-full" onClick={handleStartTest}>Start Test</Button>
            </Card>
          ) : !testCompleted ? (
            <div>
              {/* Timer and Progress */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-500">Question {currentQuestionIndex + 1} of {questions.length}</span>
                  <div className="h-1 w-full bg-gray-200 rounded-full mt-2">
                    <div 
                      className="h-full bg-brand-600 rounded-full" 
                      style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Timer className="h-5 w-5 mr-2 text-gray-500" />
                  <span className={`font-mono font-medium ${
                    timeLeft && timeLeft < 60 ? 'text-red-500' : ''
                  }`}>
                    {timeLeft !== null ? formatTime(timeLeft) : "--:--"}
                  </span>
                </div>
              </div>
              
              {/* Question Card */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
                  
                  <RadioGroup 
                    value={answers[currentQuestion.id]?.toString()} 
                    onValueChange={(value) => handleSelectAnswer(currentQuestion.id, parseInt(value))}
                  >
                    {currentQuestion.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 mb-4">
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="text-base">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  
                  <div className="flex justify-between mt-8">
                    <Button 
                      variant="outline" 
                      onClick={handlePreviousQuestion}
                      disabled={currentQuestionIndex === 0}
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                    </Button>
                    
                    {currentQuestionIndex < questions.length - 1 ? (
                      <Button onClick={handleNextQuestion}>
                        Next <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleEndTest}
                        disabled={answeredCount < questions.length}
                      >
                        Submit Test
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Question Navigation */}
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Questions</h3>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                  {questions.map((q, index) => (
                    <button
                      key={q.id}
                      className={`h-8 w-8 rounded-full text-xs flex items-center justify-center ${
                        currentQuestionIndex === index
                          ? 'bg-brand-600 text-white'
                          : answers[q.id] !== undefined
                          ? 'bg-brand-100 text-brand-800 border border-brand-300'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      onClick={() => setCurrentQuestionIndex(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <span className="text-sm text-gray-500">
                    {answeredCount} of {questions.length} questions answered
                  </span>
                </div>
              </div>
            </div>
          ) : !showResults ? (
            <Card className="text-center p-6">
              <h1 className="text-2xl font-bold mb-4">Test Completed!</h1>
              <p className="text-gray-600 mb-8">
                You've completed the {test.title} test. Are you ready to see your results?
              </p>
              <Button onClick={() => setShowResults(true)}>View Results</Button>
            </Card>
          ) : (
            <div>
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h1 className="text-2xl font-bold text-center mb-6">Test Results</h1>
                  
                  <div className="flex justify-center gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-600">
                        {score.correct}
                      </div>
                      <div className="text-sm text-gray-500">Correct</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-500">
                        {score.incorrect}
                      </div>
                      <div className="text-sm text-gray-500">Incorrect</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">
                        {score.total - score.correct - score.incorrect}
                      </div>
                      <div className="text-sm text-gray-500">Unanswered</div>
                    </div>
                  </div>
                  
                  <div className="h-2 w-full bg-gray-200 rounded-full mb-6">
                    <div 
                      className="h-full bg-brand-600 rounded-full" 
                      style={{ width: `${(score.correct / score.total) * 100}%` }}
                    ></div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg font-medium">
                      Your Score: {Math.round((score.correct / score.total) * 100)}%
                    </p>
                    <p className="text-gray-600 mt-2">
                      {score.correct} out of {score.total} questions answered correctly
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Question Review</h2>
                
                {questions.map((question, index) => {
                  const userAnswer = answers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;
                  const isUnanswered = userAnswer === undefined;
                  
                  return (
                    <Card 
                      key={question.id}
                      className={`border-l-4 ${
                        isUnanswered 
                          ? 'border-l-gray-400'
                          : isCorrect
                          ? 'border-l-green-500'
                          : 'border-l-red-500'
                      }`}
                    >
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-medium">Question {index + 1}</h3>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            isUnanswered 
                              ? 'bg-gray-100 text-gray-700'
                              : isCorrect
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {isUnanswered ? 'Unanswered' : isCorrect ? 'Correct' : 'Incorrect'}
                          </span>
                        </div>
                        
                        <p className="mt-2">{question.question}</p>
                        
                        <div className="mt-4 space-y-2">
                          {question.options.map((option, optIndex) => (
                            <div 
                              key={optIndex} 
                              className={`p-3 rounded-md ${
                                question.correctAnswer === optIndex
                                  ? 'bg-green-100 border border-green-300'
                                  : userAnswer === optIndex && userAnswer !== question.correctAnswer
                                  ? 'bg-red-100 border border-red-300'
                                  : 'bg-gray-50'
                              }`}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                        
                        {question.explanation && (
                          <div className="mt-4 p-3 bg-blue-50 rounded-md text-sm text-blue-800">
                            <strong>Explanation:</strong> {question.explanation}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button 
                  onClick={() => navigate('/mock-tests')}
                  className="px-8"
                >
                  Back to Mock Tests
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MockTestPage;
