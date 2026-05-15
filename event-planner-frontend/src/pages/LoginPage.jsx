import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
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

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold mb-4">Welcome Back</h1>
          <p className="text-gray-500">Sign in to manage your luxury events</p>
        </div>

        <div className="glass-card p-10 rounded-3xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-medium overflow-hidden"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register('email', { required: 'Email is required' })}
                  type="email"
                  className="w-full pl-12 pr-4 py-4 bg-background rounded-2xl border-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register('password', { required: 'Password is required' })}
                  type="password"
                  className="w-full pl-12 pr-4 py-4 bg-background rounded-2xl border-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full elegant-button-primary flex items-center justify-center group py-4"
            >
              {isLoading ? (
                <Loader2 className="animate-spin mr-2" />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary font-bold hover:underline">
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
