import React, { useState } from 'react';
import { PageType } from '../types';
import { GraduationCap, Mail, Lock, LogIn, Loader2, Info, Eye, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';

interface LoginProps {
  setCurrentPage: (page: PageType) => void;
  onLoginSuccess: () => void;
}

export default function Login({ setCurrentPage, onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState('student@Maria.edu');
  const [password, setPassword] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Minor validations
    if (!email.trim() || !password.trim()) {
      setErrorMsg('All credential fields are compulsory');
      return;
    }

    if (!email.includes('@')) {
      setErrorMsg('Please input a valid email address');
      return;
    }

    setIsLoggingIn(true);

    // Simulate Server Authentication Pacing
    setTimeout(() => {
      // Allow any login, but suggest our quick student mock
      setIsLoggingIn(false);
      onLoginSuccess();
      setCurrentPage('dashboard');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1800);
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8" id="login-page-container">
      <div className="w-full max-w-md bg-white border border-slate-150 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col gap-6" id="login-card">
        {/* Branding */}
        <div className="text-center flex flex-col items-center gap-2">
          <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-md flex items-center justify-center w-fit">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-extrabold text-2xl text-slate-950 tracking-tight leading-tight">
              Maria PORTAL
            </h2>
            <span className="block font-medium text-[10px] text-blue-600 tracking-widest uppercase mt-0.5">
              Secure Student & Parent Access
            </span>
          </div>
        </div>

        {/* Info Credentials Suggestion */}
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex gap-3 text-xs text-blue-850">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">Mock Student Credentials:</span>
            <span className="block">Email: <strong className="font-semibold font-mono">student@Maria.edu</strong></span>
            <span className="block">Password: <strong className="font-semibold font-mono">password</strong></span>
          </div>
        </div>

        {/* Actual Form */}
        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5">
          {errorMsg && (
            <div className="bg-red-50 border border-red-100 text-red-700 text-xs p-3 rounded-xl font-semibold">
              {errorMsg}
            </div>
          )}

          {/* Email input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Portal Registered Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@Maria.edu"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Password input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Security Password *
              </label>
              <a href="#" className="text-xs text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl py-2.5 pl-10 pr-10 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-500 select-none">
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span>Keep me securely signed in on this browser</span>
          </label>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-blue-100 flex items-center justify-center gap-2"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Verifying Credentials & Key rings...
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Sign In to Student Portal
              </>
            )}
          </button>
        </form>

        {/* Footer help */}
        <hr className="border-slate-100" />
        <div className="text-center text-[10px] sm:text-xs text-slate-400">
          <span>Stuck or forgot your student key card? Contact the admissions helpdesk at </span>
          <a href="mailto:portal-support@Maria.edu" className="text-blue-500 hover:underline">
            portal-support@Maria.edu
          </a>
        </div>
      </div>
    </div>
  );
}
