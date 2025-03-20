import { useState } from 'react';
import { Box, Button, Container, Paper, Typography, Stepper, Step, StepLabel, StepContent, MobileStepper, useTheme, useMediaQuery } from '@mui/material';
import { useTest } from '../context/TestContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PetsIcon from '@mui/icons-material/Pets';
import QuizIcon from '@mui/icons-material/Quiz';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// Slide content configuration
const slides = [
  {
    title: "あなたはどんな動物？",
    icon: <PetsIcon sx={{ fontSize: 40, color: '#3498db' }} />,
    content: (
      <>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', mt: 2 }}>
          自分自身を見つめ直してみませんか
        </Typography>
        <Typography paragraph>
          私たちは日々の暮らしの中で、
          <Box component="span" sx={{ 
            fontStyle: 'italic', 
            fontWeight: 'medium',
            background: 'linear-gradient(transparent 70%, rgba(52, 152, 219, 0.4) 100%)'
          }}>
            自分でも気づかない性格の一面
          </Box>
          を持っています。
          心の奥にある本能的な行動パターンや感情の動きは、実は動物たちの姿と
          思いがけず似ているものなのです。
        </Typography>
        <Typography paragraph>
          このアプリは、あなたの素直な回答から最も近い動物の姿を映し出し、
          新たな自己理解のきっかけを提供します。
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 2,
          animation: 'pulse 2s infinite'
        }}>
          <PetsIcon sx={{ fontSize: 60, color: '#3498db' }} />
        </Box>
      </>
    )
  },
  {
    title: "診断の仕組み",
    icon: <PsychologyIcon sx={{ fontSize: 40, color: '#e74c3c' }} />,
    content: (
      <>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', mt: 2 }}>
          心に寄り添う診断の仕組み
        </Typography>
        <Typography paragraph>
          このアプリは、行動心理学の知見とデータの力を組み合わせた仕組みで動いています。
          あなたの回答の一つひとつを理解し、最も近い動物の姿を見つけ出します。
        </Typography>
        <Typography paragraph>
          質問はただ並んでいるのではなく、
          <Box component="span" sx={{ 
            fontWeight: 'medium',
            background: 'linear-gradient(transparent 70%, rgba(231, 76, 60, 0.4) 100%)'
          }}>
            前の回答を踏まえて次の問いかけを選ぶ「対話するような診断」
          </Box>
          を心がけました。あなたの本質により早く、正しく近づけるように。
        </Typography>
        <Box sx={{ 
          p: 2, 
          bgcolor: 'rgba(231, 76, 60, 0.1)', 
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          mt: 2,
          boxShadow: '0 2px 4px rgba(231, 76, 60, 0.1)'
        }}>
          <PsychologyIcon sx={{ mr: 1, color: '#e74c3c' }} />
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 'bold' }}>ちょっとした秘密：</Box> およそ10問ほどの問いかけで、あなたらしさを映し出す動物に出会えます
          </Typography>
        </Box>
      </>
    )
  },
  {
    title: "あなたの回答が教えてくれること",
    icon: <QuizIcon sx={{ fontSize: 40, color: '#2ecc71' }} />,
    content: (
      <>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', mt: 2 }}>
          49の問いかけで見えてくる、あなたらしさ
        </Typography>
        <Typography paragraph>
          一つひとつの質問は、人との関わり方、大切にする空間、感情の表し方など、
          日常の中の小さな選択に宿る、あなたらしさを映し出すために選びました。
        </Typography>
        <Typography paragraph>
          また、
          <Box component="span" sx={{ 
            fontWeight: 'medium',
            background: 'linear-gradient(transparent 70%, rgba(46, 204, 113, 0.4) 100%)'
          }}>
            記憶力や共感性、観察力
          </Box>
          といった、動物たちが長い時間をかけて
          育んできた特別な能力も、あなたの中に息づいているかもしれません。
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          mt: 2,
          p: 2,
          bgcolor: 'rgba(46, 204, 113, 0.1)',
          borderRadius: 2,
          boxShadow: '0 2px 4px rgba(46, 204, 113, 0.1)'
        }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>人との距離感</Typography>
            <EmojiEmotionsIcon sx={{ color: '#2ecc71' }} />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>好奇心の向き</Typography>
            <QuizIcon sx={{ color: '#2ecc71' }} />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>大切なもの</Typography>
            <PetsIcon sx={{ color: '#2ecc71' }} />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>考え方の特徴</Typography>
            <PsychologyIcon sx={{ color: '#2ecc71' }} />
          </Box>
        </Box>
      </>
    )
  },
  {
    title: "診断結果の見方",
    icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: '#9b59b6' }} />,
    content: (
      <>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', mt: 2 }}>
          新しい自分との出会い
        </Typography>
        <Typography paragraph>
          診断結果では、あなたと最も近い動物の姿と、その生き方の特徴をお伝えします。
          そこには、
          <Box component="span" sx={{ 
            fontWeight: 'medium',
            background: 'linear-gradient(transparent 70%, rgba(155, 89, 182, 0.4) 100%)'
          }}>
            普段は気づかない自分自身の魅力や個性
          </Box>
          が映し出されているかもしれません。
        </Typography>
        <Typography paragraph>
          また、あなたの中で特に輝いている行動特性についても丁寧に紹介します。
          それは、日々の暮らしの中で大切にしたい、あなた自身の強みになるでしょう。
        </Typography>
        <Box sx={{ 
          p: 2, 
          bgcolor: 'rgba(155, 89, 182, 0.1)', 
          borderRadius: 2,
          mt: 2,
          boxShadow: '0 2px 4px rgba(155, 89, 182, 0.1)'
        }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#9b59b6', mb: 1 }}>
            診断結果でわかること：
          </Typography>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li><Typography variant="body2">あなたに最も近い動物の姿</Typography></li>
            <li><Typography variant="body2">その動物が教えてくれる生き方のヒント</Typography></li>
            <li><Typography variant="body2">あなたの中で輝いている特性</Typography></li>
            <li><Typography variant="body2">自分らしさを大切にするためのきっかけ</Typography></li>
          </ul>
        </Box>
      </>
    )
  }
];

const ExplanationScreen = () => {
  const { returnToIntro, startTest } = useTest();
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    startTest();
  };

  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 3, md: 4 },
        py: 4
      }}
    >
      <Typography variant="h4" component="h1" align="center" sx={{ width: '100%', mb: 4, fontWeight: 'bold', color: '#2c3e50' }}>
        性格診断の仕組み
      </Typography>

      <Paper 
        elevation={3} 
        sx={{ 
          width: '100%',
          p: { xs: 2, sm: 3, md: 4 }, 
          borderRadius: 3,
          mb: 4,
          background: 'linear-gradient(145deg, #f0f7ff, #e6f7ff)',
          overflow: 'hidden'
        }}
      >
        {isMobile ? (
          // Mobile version with horizontal stepper
          <>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              mb: 3
            }}>
              {slides[activeStep].icon}
              <Typography variant="h5" sx={{ ml: 1, fontWeight: 'bold', color: '#34495e' }}>
                {slides[activeStep].title}
              </Typography>
            </Box>
            
            <Box sx={{ minHeight: 300, mb: 3 }}>
              {slides[activeStep].content}
            </Box>

            <MobileStepper
              variant="dots"
              steps={slides.length}
              position="static"
              activeStep={activeStep}
              sx={{ 
                background: 'transparent',
                '& .MuiMobileStepper-dot': {
                  backgroundColor: 'rgba(52, 152, 219, 0.3)',
                },
                '& .MuiMobileStepper-dotActive': {
                  backgroundColor: 'rgba(52, 152, 219, 1)',
                }
              }}
              nextButton={
                activeStep === slides.length - 1 ? (
                  <Button 
                    size="small" 
                    onClick={handleFinish}
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      backgroundColor: '#3498db',
                      '&:hover': {
                        backgroundColor: '#2980b9'
                      }
                    }}
                  >
                    診断開始
                    <PlayArrowIcon />
                  </Button>
                ) : (
                  <Button 
                    size="small" 
                    onClick={handleNext}
                    disabled={activeStep === slides.length - 1}
                  >
                    次へ
                    <KeyboardArrowRight />
                  </Button>
                )
              }
              backButton={
                <Button 
                  size="small" 
                  onClick={handleBack} 
                  disabled={activeStep === 0}
                  sx={{
                    '&:hover': {
                      transform: 'translateX(-2px)'
                    }
                  }}
                >
                  <KeyboardArrowLeft />
                  戻る
                </Button>
              }
            />
          </>
        ) : (
          // Desktop version with vertical stepper
          <Stepper activeStep={activeStep} orientation="vertical">
            {slides.map((slide, index) => (
              <Step key={slide.title}>
                <StepLabel 
                  StepIconComponent={() => slide.icon}
                  sx={{ 
                    '& .MuiStepLabel-label': { 
                      fontWeight: index === activeStep ? 'bold' : 'normal',
                      color: index === activeStep ? '#34495e' : 'inherit'
                    }
                  }}
                >
                  <Typography variant="h6">{slide.title}</Typography>
                </StepLabel>
                <StepContent>
                  <Box sx={{ minHeight: 200 }}>
                    {slide.content}
                  </Box>
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      variant="outlined"
                      sx={{ borderRadius: 2 }}
                    >
                      戻る
                    </Button>
                    {index === slides.length - 1 ? (
                      <Button
                        onClick={handleFinish}
                        variant="contained"
                        sx={{ 
                          borderRadius: 2, 
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          backgroundColor: '#3498db',
                          '&:hover': {
                            backgroundColor: '#2980b9'
                          }
                        }}
                        startIcon={<PlayArrowIcon />}
                      >
                        診断スタート
                      </Button>
                    ) : (
                      <Button
                        onClick={handleNext}
                        variant="contained"
                        sx={{ 
                          borderRadius: 2,
                          bgcolor: '#3498db',
                          '&:hover': {
                            bgcolor: '#2980b9'
                          }
                        }}
                      >
                        次へ
                      </Button>
                    )}
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        )}
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button 
          variant="outlined" 
          startIcon={<ArrowBackIcon />} 
          onClick={returnToIntro}
          sx={{ 
            px: 3, 
            py: 1, 
            borderRadius: 3
          }}
        >
          ホームに戻る
        </Button>
      </Box>

      {/* Add CSS animations */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(-10px); }
          }
        `}
      </style>
    </Container>
  );
};

export default ExplanationScreen;
