'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MapPin, XCircle, Loader2 } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function PincodeChecker() {
  const { t } = useTranslation();
  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleCheck = async () => {
    if (!pincode || !/^\d{6}$/.test(pincode)) {
      setStatus('error');
      setMessage(t('home.pincode.invalid'));
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();

      if (data && data[0].Status === 'Success') {
        const city = data[0].PostOffice[0].District;
        setStatus('success');
        setMessage(t('home.pincode.success', { city }));
      } else {
        setStatus('error');
        setMessage(t('home.pincode.error'));
      }
    } catch (error) {
      console.error("Pincode API error:", error);
      setStatus('error');
      setMessage(t('home.pincode.api_error'));
    }
  };

  return (
    <Card className="bg-card shadow-md animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <MapPin className="h-8 w-8 text-primary hidden md:block" />
          <Input
            type="text"
            placeholder={t('home.pincode.pincodePlaceholder')}
            value={pincode}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, '');
              if (value.length <= 6) {
                setPincode(value);
              }
              setStatus('idle');
              setMessage('');
            }}
            className="flex-1 min-w-0"
          />
          <Button onClick={handleCheck} disabled={status === 'loading'}>
            {status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t('home.pincode.button')}
          </Button>
        </div>
        {message && (
          <div className="mt-4 text-center flex items-center justify-center gap-2 font-semibold">
            {status === 'success' && <CheckCircle className="h-5 w-5 text-[hsl(var(--chart-2))]" />}
            {status === 'error' && <XCircle className="h-5 w-5 text-destructive" />}
            <p className={
              status === 'success' ? 'text-[hsl(var(--chart-2))]' :
              status === 'error' ? 'text-destructive' : ''
            }>
              {message}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
