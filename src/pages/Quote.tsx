import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2 } from 'lucide-react';

const pricingData: Record<string, { name: string; basePrice: number }> = {
  posters: { name: 'Posters (A2)', basePrice: 150 },
  tshirts: { name: 'T-Shirts (Printed)', basePrice: 200 },
  vehicle: { name: 'Vehicle Branding (Per Side)', basePrice: 1500 },
  photoshoot: { name: 'Photoshoot (Per Hour)', basePrice: 800 },
};

export function Quote() {
  const [selections, setSelections] = useState<Record<string, number>>({
    posters: 0,
    tshirts: 0,
    vehicle: 0,
    photoshoot: 0,
  });

  const handleQuantityChange = (item: string, value: string) => {
    const num = parseInt(value) || 0;
    setSelections(prev => ({ ...prev, [item]: Math.max(0, num) }));
  };

  const calculateTotal = () => {
    return Object.entries(selections).reduce((total: number, [item, quantity]: [string, number]) => {
      const price = pricingData[item]?.basePrice || 0;
      return total + (price * quantity);
    }, 0);
  };

  const total = calculateTotal();

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-primary mb-6 flex items-center justify-center gap-4"
          >
            <Calculator className="w-12 h-12 text-accent" />
            Instant Quote Tool
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the services you need and enter quantities to get an instant estimated quote.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          <div className="space-y-8">
            {Object.entries(pricingData).map(([key, data]) => (
              <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 transition-colors">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary">{data.name}</h3>
                  <p className="text-gray-500">Base price: R{data.basePrice}</p>
                </div>
                <div className="flex items-center gap-4">
                  <label htmlFor={`qty-${key}`} className="text-sm font-medium text-gray-700">Quantity:</label>
                  <input
                    type="number"
                    id={`qty-${key}`}
                    min="0"
                    value={selections[key] || ''}
                    onChange={(e) => handleQuantityChange(key, e.target.value)}
                    className="w-24 px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none text-center font-bold text-lg"
                    placeholder="0"
                  />
                </div>
                <div className="w-32 text-right">
                  <span className="text-xl font-bold text-accent">
                    R{((selections[key] || 0) * data.basePrice).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="mb-8">
              <label htmlFor="artwork" className="block text-sm font-medium text-gray-700 mb-2">Upload Artwork (Optional)</label>
              <input 
                type="file" 
                id="artwork" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-accent hover:file:bg-blue-100"
                accept="image/*,.pdf,.ai,.psd"
              />
              <p className="text-xs text-gray-500 mt-2">Accepted formats: JPG, PNG, PDF, AI, PSD. Max size: 20MB.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-gray-500 mb-1">Estimated Total</p>
                <h2 className="text-5xl font-bold text-primary">
                  R{total.toLocaleString()}
                </h2>
                <p className="text-sm text-gray-400 mt-2">* Prices are estimates and subject to final confirmation.</p>
              </div>
              
              <button 
                className={`px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all ${
                  total > 0 
                    ? 'bg-highlight text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                disabled={total === 0}
                onClick={() => alert(`Quote request for R${total} sent! We will contact you shortly.`)}
              >
                Request Official Quote <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
