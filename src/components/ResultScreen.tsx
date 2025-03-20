import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Container, 
  Divider, 
  Grid, 
  Paper, 
  Typography,
  Tooltip,
  IconButton,
  Chip,
  Collapse
} from '@mui/material';
import { useTest } from '../context/TestContext';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';
import ReplayIcon from '@mui/icons-material/Replay';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import { TraitMatch } from '../types';
import { traits } from '../data/traits';

// Register ChartJS components
ChartJS.register(ArcElement, ChartTooltip, Legend);

const ResultScreen = () => {
  const { state, resetTest } = useTest();
  const { resultAnimal, topMatches } = state;
  
  // State to track which animal's trait details are expanded
  const [expandedAnimals, setExpandedAnimals] = useState<Record<string, boolean>>({});

  const toggleExpand = (animalId: string) => {
    setExpandedAnimals(prev => ({
      ...prev,
      [animalId]: !prev[animalId]
    }));
  };

  if (!resultAnimal) return null;

  // Prepare chart data
  const chartData = {
    labels: topMatches.map(match => match.animal.japaneseName),
    datasets: [
      {
        data: topMatches.map(match => Math.round(match.score * 100)),
        backgroundColor: [
          'rgba(52, 152, 219, 0.8)',
          'rgba(46, 204, 113, 0.8)',
          'rgba(241, 196, 15, 0.8)',
        ],
        borderColor: [
          'rgba(52, 152, 219, 1)',
          'rgba(46, 204, 113, 1)',
          'rgba(241, 196, 15, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    cutout: '65%',
  };

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
      <Typography variant="h4" component="h1" align="center" sx={{ width: '100%', mt: 4, mb: 3, fontWeight: 'bold', color: '#2c3e50' }}>
        診断結果
      </Typography>

      <Paper 
        elevation={3} 
        sx={{ 
          width: '100%',
          p: 4, 
          borderRadius: 3,
          mb: 4,
          background: 'linear-gradient(145deg, #f0f7ff, #e6f7ff)',
        }}
      >
        <Typography variant="h5" align="center" sx={{ mb: 3, color: '#34495e' }}>
          あなたは <span style={{ fontWeight: 'bold', color: '#3498db' }}>{resultAnimal.japaneseName}</span> によく似ています！
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                width: '100%',
                height: 280,
                backgroundColor: 'white',
                borderRadius: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <Box sx={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Box sx={{ width: '80%', maxWidth: 200 }}>
                  <Doughnut data={chartData} options={chartOptions} />
                </Box>
              </Box>
            </Box>
            <Typography variant="body2" align="center" sx={{ mt: 2, fontStyle: 'italic', color: '#7f8c8d' }}>
              上位3つのマッチング結果
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="body1" paragraph>
                {resultAnimal.description}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                {Object.entries(resultAnimal.traits)
                  .filter(([_, level]) => level === 'high' || level === 'medium')
                  .map(([id, level]) => {
                    const trait = traits.find(t => t.id === id);
                    if (!trait) return null;
                    
                    // 特性の強さをパーセンテージで表現
                    const strengthValue = level === 'high' ? 100 : level === 'medium' ? 60 : level === 'low' ? 30 : 0;
                    const strengthColor = level === 'high' ? '#3498db' : level === 'medium' ? '#f39c12' : '#95a5a6';
                    
                    return (
                      <Box key={id} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body2" sx={{ minWidth: 100, fontWeight: 'medium' }}>
                          {trait.name}
                        </Typography>
                        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ flex: 1, height: 8, bgcolor: 'rgba(0,0,0,0.1)', borderRadius: 4 }}>
                            <Box 
                              sx={{ 
                                width: `${strengthValue}%`, 
                                height: '100%', 
                                bgcolor: strengthColor,
                                borderRadius: 4 
                              }} 
                            />
                          </Box>
                          <Typography variant="body2" sx={{ color: strengthColor, fontWeight: 'medium', minWidth: 40 }}>
                            {strengthValue}%
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ width: '100%', mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#34495e' }}>
          詳細なマッチング結果
        </Typography>
        
        {topMatches.map((match, index) => (
          <Card 
            key={match.animal.id} 
            sx={{ 
              mb: 2, 
              borderRadius: 2,
              boxShadow: index === 0 ? '0 4px 12px rgba(52, 152, 219, 0.2)' : 'none',
              border: index === 0 ? '1px solid rgba(52, 152, 219, 0.3)' : '1px solid rgba(0,0,0,0.1)'
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Grid container alignItems="center">
                <Grid item xs={8}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6">
                      {index + 1}. {match.animal.japaneseName} ({match.animal.name})
                    </Typography>
                    <Tooltip 
                      title={
                        <Box sx={{ p: 1 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 'medium', color: '#2c3e50', mb: 1 }}>
                            {match.animal.japaneseName}について
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#34495e', lineHeight: 1.6 }}>
                            {match.animal.description}
                          </Typography>
                        </Box>
                      } 
                      arrow 
                      placement="top"
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                            maxWidth: 300,
                            borderRadius: 2,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            p: 2,
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
                      <IconButton size="small" sx={{ ml: 1, color: '#3498db' }}>
                        <InfoIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    
                    {match.traitMatches && match.traitMatches.length > 0 && (
                      <IconButton 
                        size="small" 
                        sx={{ ml: 1, color: '#3498db' }}
                        onClick={() => toggleExpand(match.animal.id)}
                      >
                        {expandedAnimals[match.animal.id] ? 
                          <ExpandLessIcon fontSize="small" /> : 
                          <ExpandMoreIcon fontSize="small" />
                        }
                      </IconButton>
                    )}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    一致度: {Math.round(match.score * 100)}%
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ width: '100%', height: 10, bgcolor: 'rgba(0,0,0,0.1)', borderRadius: 5 }}>
                    <Box 
                      sx={{ 
                        width: `${Math.round(match.score * 100)}%`, 
                        height: '100%', 
                        bgcolor: index === 0 ? '#3498db' : '#95a5a6',
                        borderRadius: 5 
                      }} 
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* 性格特性の詳細表示 */}
              {match.traitMatches && match.traitMatches.length > 0 && (
                <Collapse in={expandedAnimals[match.animal.id] || false}>
                  <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, color: '#2c3e50' }}>
                      性格特性
                    </Typography>
                    <Grid container spacing={1}>
                      {match.traitMatches.map((traitMatch: TraitMatch) => {
                        // 特性の強さをパーセンテージで表現
                        const strengthValue = traitMatch.level === 'high' ? 100 : 
                                           traitMatch.level === 'medium' ? 60 : 
                                           traitMatch.level === 'low' ? 30 : 0;
                        const strengthColor = traitMatch.level === 'high' ? '#3498db' : 
                                           traitMatch.level === 'medium' ? '#f39c12' : '#95a5a6';
                        
                        return (
                          <Grid item key={traitMatch.trait.id}>
                            <Tooltip
                              title={
                                <Box sx={{ p: 1 }}>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 'medium', color: '#2c3e50', mb: 1 }}>
                                    {traitMatch.trait.name}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: '#34495e', lineHeight: 1.6 }}>
                                    {traitMatch.trait.description}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: '#34495e', mt: 1 }}>
                                    レベル: {traitMatch.level === 'high' ? '高い' : 
                                          traitMatch.level === 'medium' ? '中程度' : 
                                          traitMatch.level === 'low' ? '低い' : 'なし'}
                                  </Typography>
                                </Box>
                              }
                              arrow
                              placement="top"
                              componentsProps={{
                                tooltip: {
                                  sx: {
                                    bgcolor: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: 2,
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                    p: 2,
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
                              <Chip
                                label={`${traitMatch.trait.name}: ${strengthValue}%`}
                                sx={{
                                  bgcolor: `${strengthColor}20`,
                                  color: strengthColor,
                                  borderColor: strengthColor,
                                  border: '1px solid',
                                  fontWeight: 'medium'
                                }}
                                variant="outlined"
                                size="small"
                              />
                            </Tooltip>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Collapse>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>

      <Divider sx={{ width: '100%', mb: 4 }} />

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <Button 
          variant="contained" 
          startIcon={<ReplayIcon />} 
          onClick={resetTest}
          sx={{ 
            px: 4, 
            py: 1.5, 
            borderRadius: 3,
            backgroundColor: '#3498db',
            '&:hover': {
              backgroundColor: '#2980b9'
            }
          }}
        >
          もう一度診断する
        </Button>
      </Box>
    </Container>
  );
};

export default ResultScreen;
