import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { useTest } from '../context/TestContext';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PetsIcon from '@mui/icons-material/Pets';

const Introduction = () => {
  const { startTest, showExplanation } = useTest();

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
      <Paper 
        elevation={3} 
        sx={{ 
          width: '100%',
          p: 4, 
          mt: 5, 
          borderRadius: 2,
          background: 'linear-gradient(145deg, #f0f7ff, #e6f7ff)'
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <PetsIcon sx={{ fontSize: 50, color: '#3498db', mb: 1 }} />
        </Box>
        
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
          動物性格診断
        </Typography>
        
        <Typography variant="h5" gutterBottom align="center" sx={{ mb: 4, color: '#34495e' }}>
          あなたにそっくりな動物を見つけましょう
        </Typography>
        
        <Typography paragraph sx={{ mb: 3 }}>
          このアプリは、あなたの性格や行動パターンから、最も似ている動物を見つける旅にご案内します。
          日々の生活の中で、自分でも気づかなかった魅力的な一面が見えてくるかもしれません。
        </Typography>
        
        <Typography paragraph sx={{ mb: 5 }}>
          質問に答えていくと、あなたの回答を丁寧に理解して、最もぴったりの動物を見つけ出します。
          <Box component="span" sx={{ 
            fontStyle: 'italic', 
            fontWeight: 'medium',
            background: 'linear-gradient(transparent 70%, rgba(52, 152, 219, 0.4) 100%)'
          }}>
            心に寄り添う「対話するような診断」
          </Box>
          が、あなたの本質に近づいていきます。
        </Typography>
        
        <Typography paragraph sx={{ mb: 5 }}>
          社交性、好奇心、忠誠心など、さまざまな特性から、動物たちの世界であなたらしさを映し出す姿を探していきましょう。
        </Typography>
        
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          mt: 2
        }}>
          <Button 
            variant="contained" 
            size="large" 
            startIcon={<PlayArrowIcon />}
            onClick={startTest}
            sx={{ 
              px: 4, 
              py: 1.5, 
              borderRadius: 3,
              fontSize: '1.1rem',
              backgroundColor: '#3498db',
              boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)',
              width: { xs: '100%', sm: '60%', md: '50%' },
              '&:hover': {
                backgroundColor: '#2980b9'
              }
            }}
          >
            診断スタート
          </Button>
          
          <Typography 
            variant="body2" 
            component="span"
            onClick={showExplanation}
            sx={{ 
              mt: 2,
              color: '#7f8c8d',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              fontSize: '0.85rem',
              '&:hover': {
                color: '#34495e'
              }
            }}
          >
            <InfoOutlinedIcon sx={{ mr: 0.5, fontSize: '0.85rem' }} />
            性格診断の仕組み
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Introduction;
