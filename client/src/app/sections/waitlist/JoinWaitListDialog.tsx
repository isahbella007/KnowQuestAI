"use client"
import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Button,
    Stack,
    Box,
    Typography,
    OutlinedInput,
    InputAdornment,
  } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Theme, styled } from '@mui/material/styles';
import { useState } from 'react';
import Iconify from '@/app/components/Iconify';
import RHFTextField from '@/app/components/hook-form/RHFTextField';
import FormProvider from '@/app/components/hook-form/FormProvider';

  
const DialogBackground = styled(DialogContent)(({ theme }: { theme: Theme }) => {
    return {
      backgroundImage: 'linear-gradient(135deg, #6A0DAD 0%, #4A90E2 100%)', // Match hero gradient
      backgroundSize: '300% 300%',
      padding: '40px',
      textAlign: 'center',
      color: '#fff', // Changed to white text to match hero
      borderRadius: '16px',
      [theme.breakpoints.down('sm')]: {
        padding: '30px 20px', // Less padding on mobile
      },
    };
  });
  
  // Validation schema
  const WaitlistSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Enter a valid email'),
  });
  
  type WaitlistFormProps = {
    email: string;
  };
  
  type WaitlistDialogProps = {
    open: boolean;
    onClose: VoidFunction;
  };
  
  export default function WaitlistDialog({ open, onClose }: WaitlistDialogProps) {
    const [completed, setCompleted] = useState<boolean>(false);
    const [copied, setCopied] = useState(false);
  
    const methods = useForm<WaitlistFormProps>({
      resolver: yupResolver(WaitlistSchema),
      defaultValues: {
        email: '',
      },
    });
  
    const {
      handleSubmit,
      formState: { isSubmitting },
    } = methods;
  
    const onSubmit = async (data: WaitlistFormProps) => {
      try {
        console.log('they joined the waitlist')
        const formDataToSend = new FormData()
       
        formDataToSend.append('entry.1611001331', data.email);  
        formDataToSend.append('entry.1708493432', 'Yes');  
        await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSetTbtRcUlJPdsgwWy97MjbvfhV2xE8ySpblfItvc6KAOh_Zw/formResponse', { 
          method: 'POST',
          body: formDataToSend,
          mode: 'no-cors'
        })
        setCompleted(true);
      } catch (error) {}
    };
  
    const handleCopyClick = () => {
      navigator.clipboard.writeText(`https://name-not-decided.vercel.app/`);
      setCopied(true);
      // alert('Link copied to clipboard');
    };
  
    return (
      <Dialog 
      fullWidth 
      maxWidth="sm" 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
        }
      }}
      >
        <DialogBackground>
          <Box display="flex" justifyContent={'center'} alignItems={'center'} flexDirection="row">
            {/* <Logo /> */}
          </Box>
          {completed ? (
            <Box>
              <Typography variant="h4" fontWeight="bold">
                🎉 You're in the Exclusive 100!
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, fontWeight: 'medium' }}>
                Thanks for joining! Share this link to help your friends get early access too.
              </Typography>
  
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  my: 4,
                }}
              >
                <OutlinedInput
                  type={'text'}
                  fullWidth
                  value='https://name-not-decided.vercel.app/'
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'common.white',
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button 
                        onClick={handleCopyClick} 
                        sx={{ 
                          color: '#FFC107',
                          fontWeight: 'bold',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 193, 7, 0.1)',
                          }
                        }}
                      >
                        {copied ? 'Copied' : 'Copy'}
                      </Button>
                    </InputAdornment>
                  }
                />
              </Box>
  
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, fontWeight: 'medium' }}>
                Share the link with your friends!
              </Typography>
  
              <Stack direction="row" justifyContent="center" spacing={2}>
                <Button
                  startIcon={<Iconify icon={'fa-brands:facebook'} />}
                  variant="contained"
                  color="secondary"
                  sx={{ py: 1.5, px: 2.5,
                    backgroundColor: '#FFC107',
                  color: '#333333',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#FFB000',
                  }
                   }}
                >
                    Facebook
                </Button>
                <Button
                  startIcon={<Iconify icon={'fa-brands:whatsapp'} />}
                  variant="contained"
                  color="secondary"
                  sx={{ py: 1.5, px: 2.5,
                    backgroundColor: '#FFC107',
                  color: '#333333',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#FFB000',
                  }
                  }}
                >
                  WhatsApp
                </Button>
              </Stack>
            </Box>
          ) : (
            <Box>
              {/* <DialogTitle sx={{ mb: 2 }}>Join the waitlist</DialogTitle> */}
              <Typography 
              variant="h4" 
              fontWeight="bold" 
              color="common.white"
              sx={{ mb: 2 }}
            >
              Join the First 100 and Unlock Exclusive Perks!
            </Typography>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    <Box sx={{ textAlign: 'left', mb: 1 }}>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 1.5, 
                        color: 'common.white' 
                        }}
                    >
                        <Iconify 
                        icon="mdi:check-circle" 
                        sx={{ color: '#FFC107', mr: 1, width: 24, height: 24 }} 
                        />
                        <strong>Exclusive Badge</strong> 
                    </Typography>
                    
                    <Typography 
                        variant="body1" 
                        sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 1.5, 
                        color: 'common.white' 
                        }}
                    >
                        <Iconify 
                        icon="mdi:check-circle" 
                        sx={{ color: '#FFC107', mr: 1, width: 24, height: 24 }} 
                        />
                        <strong>Discount on Premium Features</strong> 
                    </Typography>
                    
                    <Typography 
                        variant="body1" 
                        sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 1.5, 
                        color: 'common.white' 
                        }}
                    >
                        <Iconify 
                        icon="mdi:check-circle" 
                        sx={{ color: '#FFC107', mr: 1, width: 24, height: 24 }} 
                        />
                        <strong>Shape the Future</strong>
                    </Typography>
                    </Box>
                    
                    <RHFTextField
                    name="email"
                    placeholder="Enter your email"
                    fullWidth
                    InputProps={{ 
                        autoFocus: true,
                        sx: {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        color: 'common.white',
                        '&::placeholder': {
                            color: 'rgba(255, 255, 255, 0.7)',
                        },
                        '&:hover': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        }
                    }}
                    />
                    
                    <Typography 
                    variant="body2" 
                    sx={{ 
                       
                        opacity: 0.8,
                        fontWeight: 'medium',
                        textAlign: 'center',
                        mt: 1
                    }}
                    >
                    Sign up now before all 100 spots are taken!
                    </Typography>
                    
                    <DialogActions sx={{ justifyContent: 'center', pt: 1 }}>
                    <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                        sx={{
                        padding: '12px 30px',
                        fontSize: '16px',
                        backgroundColor: '#FFC107',
                        color: '#333333',
                        fontWeight: 'bold',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        '&:hover': {
                            backgroundColor: '#FFB000',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.25)',
                        },
                        transition: 'all 0.2s',
                        }}
                    >
                        Join the Exclusive 100
                    </LoadingButton>
                    </DialogActions>
                </Stack>
              </FormProvider>
            </Box>
          )}
        </DialogBackground>
      </Dialog>
    );
  }
  