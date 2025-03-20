import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Container, 
  LinearProgress, 
  Typography,
  IconButton,
  Tooltip
} from '@mui/material';
import { useTest } from '../context/TestContext';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const QuestionScreen = () => {
  const { state, answerQuestion, goToPreviousQuestion } = useTest();
  const { currentQuestion, askedQuestions } = state;

  // Calculate progress
  const progress = (askedQuestions.length / 15) * 100; // Max 15 questions

  if (!currentQuestion) return null;

  // Check if we can go back (need at least one previous question)
  const canGoBack = state.questionHistory && state.questionHistory.length > 1;

  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 3, md: 4 } 
      }}
    >
      <Box sx={{ width: '100%', mt: 4, mb: 2, position: 'relative' }}>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 3, fontWeight: 'bold', color: '#2c3e50' }}>
          動物性格診断
        </Typography>
        {canGoBack && (
          <Tooltip 
            title={
              <Typography variant="body2" sx={{ color: '#34495e' }}>前の質問に戻る</Typography>
            }
            arrow
            placement="top"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: 2,
                  p: 1,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(52, 152, 219, 0.2)'
                }
              },
              arrow: {
                sx: {
                  color: 'rgba(255, 255, 255, 0.95)'
                }
              }
            }}
          >
            <IconButton 
              onClick={goToPreviousQuestion}
              sx={{ 
                position: 'absolute', 
                left: 0, 
                top: 0,
                color: '#3498db',
                '&:hover': {
                  bgcolor: 'rgba(52, 152, 219, 0.1)'
                }
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
        )}
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            height: 10, 
            borderRadius: 5,
            mb: 1,
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#3498db'
            }
          }} 
        />
        <Typography variant="body2" align="right" sx={{ mb: 3 }}>
          質問 {askedQuestions.length + 1} / 最大15問
        </Typography>
      </Box>

      <Card 
        elevation={3} 
        sx={{ 
          width: '100%',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mb: 4, 
          borderRadius: 3,
          background: 'linear-gradient(145deg, #f9f9f9, #f5f5f5)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
        }}
      >
        <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <Typography variant="h5" component="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 'medium', color: '#34495e' }}>
            {currentQuestion.text}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<CheckCircleOutlineIcon />}
              onClick={() => answerQuestion(true)}
              sx={{ 
                px: 4, 
                py: 2,
                borderRadius: 3,
                backgroundColor: '#2ecc71',
                '&:hover': {
                  backgroundColor: '#27ae60'
                }
              }}
            >
              はい
            </Button>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<CancelOutlinedIcon />}
              onClick={() => answerQuestion(false)}
              sx={{ 
                px: 4, 
                py: 2,
                borderRadius: 3,
                backgroundColor: '#e74c3c',
                '&:hover': {
                  backgroundColor: '#c0392b'
                }
              }}
            >
              いいえ
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ width: '100%', mt: 4, p: 2, borderRadius: 2, bgcolor: 'rgba(52, 152, 219, 0.1)' }}>
        <Typography variant="body2" align="center" sx={{ fontStyle: 'italic', color: '#7f8c8d' }}>
          各質問への回答によって、あなたに最も似た動物を特定していきます。
          正直にお答えください。
        </Typography>
      </Box>
    </Container>
  );
};

export default QuestionScreen;
