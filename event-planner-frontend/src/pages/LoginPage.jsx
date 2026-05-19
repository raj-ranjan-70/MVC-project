import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, Loader2, ArrowLeft } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const success = await login(data);
    if (success) {
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div 
      className="h-screen w-screen relative flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/login-page-image.avif')" }}
    >
      {/* Background Dimming & Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0"></div>

      {/* Floating Back Arrow Button */}
      <button 
        onClick={handleBack}
        className="absolute top-8 left-8 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 hover:scale-105 transition-all shadow-lg cursor-pointer"
        aria-label="Go Back"
      >
        <ArrowLeft size={20} />
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full relative z-10 my-auto"
      >
        {/* Compact Glassmorphic Form Container */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl relative">
          
          <div className="text-center mb-6">
            <h1 className="text-3xl font-display font-bold mb-1 text-white drop-shadow-md">Welcome Back</h1>
            <p className="text-white/80 text-xs font-medium">Sign in to manage your luxury events</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-500/25 border border-red-500/40 text-red-100 p-3 rounded-xl text-xs font-medium overflow-hidden"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-white/90">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={18} />
                <input
                  {...register('email', { required: 'Email is required' })}
                  type="email"
                  className="w-full pl-11 pr-4 py-3 bg-white/5 text-white placeholder-white/45 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#b388ff]/50 focus:bg-white/10 transition-all text-xs font-medium"
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && <p className="mt-0.5 text-[10px] text-red-300 font-semibold">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-white/90">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={18} />
                <input
                  {...register('password', { required: 'Password is required' })}
                  type="password"
                  className="w-full pl-11 pr-4 py-3 bg-white/5 text-white placeholder-white/45 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#b388ff]/50 focus:bg-white/10 transition-all text-xs font-medium"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <p className="mt-0.5 text-[10px] text-red-300 font-semibold">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-3.5 rounded-xl shadow-xl flex items-center justify-center group transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-xs mt-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin mr-2 text-gray-900" size={16} />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-gray-900" size={14} />
                </>
              )}
            </button>
          </form>

          {/* Create Account Link */}
          <div className="mt-6 text-center border-t border-white/10 pt-4">
            <p className="text-white/70 text-xs font-medium">
              Don't have an account?{' '}
              <Link to="/signup" className="text-white font-bold hover:underline transition-all">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
