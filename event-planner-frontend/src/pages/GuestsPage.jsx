import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Plus, Mail, Phone, Tag } from 'lucide-react';
import api from '../services/api';

const GuestsPage = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await api.get('/guests');
        setGuests(response.data);
      } catch (error) {
        console.error('Failed to fetch guests', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGuests();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-display font-bold">Guest Relations</h1>
          <p className="text-gray-500 mt-1">Manage your sophisticated guest lists and RSVPs</p>
        </div>
        <button className="elegant-button-primary flex items-center">
          <Plus className="mr-2" /> Add Guest
        </button>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-5 text-sm font-bold text-gray-700 uppercase tracking-wider">Name</th>
              <th className="px-8 py-5 text-sm font-bold text-gray-700 uppercase tracking-wider">Contact</th>
              <th className="px-8 py-5 text-sm font-bold text-gray-700 uppercase tracking-wider">Side</th>
              <th className="px-8 py-5 text-sm font-bold text-gray-700 uppercase tracking-wider">Status</th>
              <th className="px-8 py-5 text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {guests.length > 0 ? (
              guests.map((guest) => (
                <tr key={guest.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6 font-bold text-gray-800">{guest.name}</td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col space-y-1">
                      <span className="flex items-center text-sm text-gray-500"><Mail size={14} className="mr-2" /> {guest.email || 'N/A'}</span>
                      <span className="flex items-center text-sm text-gray-500"><Phone size={14} className="mr-2" /> {guest.phone || 'N/A'}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{guest.side || 'General'}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                      guest.rsvp_status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                      guest.rsvp_status === 'declined' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {guest.rsvp_status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-gray-400">...</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-8 py-20 text-center text-gray-400 italic">No guests added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuestsPage;
