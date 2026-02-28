'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MapPin } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Jaipur', 'Kolkata'];

export function PincodeChecker() {
  const { t } = useTranslation();
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = () => {
    if (pincode && city) {
      setResult(t('home.pincode.success', { city: t(`home.pincode.cities.${city}`) }));
    } else {
      setResult('');
    }
  };

  return (
    <Card className="bg-card shadow-md animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <MapPin className="h-8 w-8 text-primary hidden md:block" />
          <Input
            type="text"
            placeholder={t('home.pincode.pincodePlaceholder')}
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="flex-1 min-w-0"
          />
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="flex-1 min-w-0">
              <SelectValue placeholder={t('home.pincode.cityPlaceholder')} />
            </SelectTrigger>
            <SelectContent>
              {cities.map((c) => (
                <SelectItem key={c} value={c}>
                  {t(`home.pincode.cities.${c}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleCheck}>{t('home.pincode.button')}</Button>
        </div>
        {result && (
          <div className="mt-4 text-center flex items-center justify-center gap-2 text-[hsl(var(--chart-2))] font-semibold">
            <CheckCircle className="h-5 w-5" />
            <p>{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
