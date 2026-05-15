import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck, Plus, Star, MapPin, Phone } from 'lucide-react';
import api from '../services/api';

const VendorsPage = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await api.get('/vendors');
        setVendors(response.data);
      } catch (error) {
        console.error('Failed to fetch vendors', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVendors();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-display font-bold">Partner Curators</h1>
          <p className="text-gray-500 mt-1">Manage your team of world-class vendors</p>
        </div>
        <button className="elegant-button-primary flex items-center">
          <Plus className="mr-2" /> Add Vendor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vendors.length > 0 ? (
          vendors.map((vendor, i) => (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center">
                  <Truck size={32} />
                </div>
                <div className="flex items-center text-gold">
                  <Star size={16} className="fill-current mr-1" />
                  <span className="text-sm font-bold text-gray-800">4.9</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-2">{vendor.name}</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-6">{vendor.category}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin size={16} className="mr-3 text-primary/40" />
                  {vendor.location || 'Not specified'}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Phone size={16} className="mr-3 text-primary/40" />
                  {vendor.contact_info || 'No contact info'}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {vendor.status}
                </span>
                <button className="text-primary font-bold text-sm hover:underline">Manage Contract</button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400 italic">No vendors booked yet.</div>
        )}
      </div>
    </div>
  );
};

export default VendorsPage;
