'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return 'Email is required';
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return '';
  };

  const validatePassword = (value: string) => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const handleContinue = () => {
    const errorMsg = validateEmail(email);
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    setError('');
    setStep('password');
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorMsg = validatePassword(password);
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    setIsLoading(true);
    setError('');

    await new Promise(resolve => setTimeout(resolve, 1000));

    const userAccount = mockAccounts.find(account => account.email.toLowerCase() === email.toLowerCase());

    if (!userAccount) {
      setError('User not found');
      setIsLoading(false);
      return;
    }

    if (userAccount.password !== password) {
      setError('Invalid password');
      setIsLoading(false);
      return;
    }

    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    setIsLoading(false);
    router.push('/dashboard');
  };

  const handleBack = () => {
    setStep('email');
    setPassword('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <div className="mx-auto mb-6 flex items-center justify-center">
            <Image src="https://i.imgur.com/Qqcf1jm.png" width={45} height={27} className="w-[80px]" alt="logo" />
          </div>
          <h1 className="text-white text-2xl font-semibold">{step === 'email' ? 'Enter your email' : 'Enter your password'}</h1>
          {step === 'email' && <p className="text-gray-400 text-sm mt-2">Enter your email to continue</p>}
        </div>

        <div className="space-y-6">
          {step === 'email' ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-white text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email"
                  className={`w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#00D632] focus:ring-[#00D632] py-4 px-3 rounded-lg border outline-none transition-colors ${
                    error ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : ''
                  }`}
                  autoFocus
                />
                {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
              </div>
              <button
                onClick={handleContinue}
                disabled={!email || isLoading}
                className="w-full bg-[#00D632] hover:bg-[#00C12E] text-black font-semibold h-12 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <button type="button" onClick={handleBack} className="flex items-center text-gray-400 hover:text-white transition-colors mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="text-sm">{email}</span>
              </button>

              <div className="space-y-2">
                <label htmlFor="password" className="text-white text-sm">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your password"
                    className={`w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#00D632] focus:ring-[#00D632] py-4 px-3 pr-10 rounded-lg border outline-none transition-colors ${
                      error ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : ''
                    }`}
                    autoFocus
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={!password || isLoading}
                className="w-full bg-[#00D632] hover:bg-[#00C12E] text-black font-semibold h-12 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  'Log In'
                )}
              </button>
            </form>
          )}

          <div className="text-center space-y-3">
            <button className="text-[#00D632] text-sm hover:underline">Forgot password?</button>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>
            By continuing, you agree to our <button className="text-[#00D632] hover:underline">Terms of Service</button> and <button className="text-[#00D632] hover:underline">Privacy Policy</button>
          </p>
          <p className="my-4 mt-8">Cash App is a financial platform, not a bank. Banking services provided by Cash App’s bank partner(s). Prepaid debit cards issued by Sutton Bank, Member FDIC.</p>
          <p>
            Brokerage services by Cash App Investing LLC, member FINRA/SIPC, subsidiary of Block, Inc. Bitcoin services provided by Block, Inc. Cash App Investing does not trade bitcoin, and Block,
            Inc. is not a member of FINRA or SIPC. Tax filing preparation services by Cash App Taxes, Inc. For additional information, see the Disclosures.
          </p>
        </div>
      </div>
    </div>
  );
}
