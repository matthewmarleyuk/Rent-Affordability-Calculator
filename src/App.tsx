import React, { useState } from 'react';
import { Calculator, Info, PoundSterling, Home, Briefcase } from 'lucide-react';
import FAQ from './components/FAQ';

type CalculationType = 'income' | 'rent';

function App() {
  const [calculationType, setCalculationType] = useState<CalculationType>('income');
  const [monthlyRent, setMonthlyRent] = useState<string>('');
  const [annualIncome, setAnnualIncome] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const calculateResult = () => {
    setError('');
    setResult('');

    if (calculationType === 'income') {
      if (!monthlyRent || isNaN(Number(monthlyRent)) || Number(monthlyRent) <= 0) {
        setError('Please enter a valid monthly rent amount');
        return;
      }
      const requiredIncome = Number(monthlyRent) * 30;
      setResult(`Required Annual Income: £${requiredIncome.toLocaleString()}`);
    } else {
      if (!annualIncome || isNaN(Number(annualIncome)) || Number(annualIncome) <= 0) {
        setError('Please enter a valid annual income');
        return;
      }
      const affordableRent = Number(annualIncome) / 30;
      setResult(`Affordable Monthly Rent: £${affordableRent.toLocaleString()}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Calculator className="h-16 w-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Rent Affordability Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Make informed decisions about your housing budget with our easy-to-use calculator
          </p>
        </div>

        {/* Calculator Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="max-w-xl mx-auto">
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                What would you like to calculate?
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setCalculationType('income')}
                  className={`p-4 rounded-lg flex items-center justify-center gap-2 transition ${
                    calculationType === 'income'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Briefcase className="h-5 w-5" />
                  Required Income
                </button>
                <button
                  onClick={() => setCalculationType('rent')}
                  className={`p-4 rounded-lg flex items-center justify-center gap-2 transition ${
                    calculationType === 'rent'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Home className="h-5 w-5" />
                  Affordable Rent
                </button>
              </div>
            </div>

            {calculationType === 'income' ? (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Monthly Rent (£)
                </label>
                <div className="relative">
                  <PoundSterling className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter monthly rent"
                  />
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Annual Income (£)
                </label>
                <div className="relative">
                  <PoundSterling className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter annual income"
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                {error}
              </div>
            )}

            <button
              onClick={calculateResult}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Calculate
            </button>

            {result && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-center text-xl font-semibold text-green-800">{result}</p>
              </div>
            )}
          </div>
        </div>

        {/* Information Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">How It Works</h2>
            </div>
            <p className="text-gray-600">
              Our calculator uses the 30% rule of thumb for housing expenses. For required income,
              we multiply monthly rent by 30 to determine the recommended annual income. For affordable
              rent, we divide annual income by 30 to find the recommended monthly rent.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-900">Benefits</h2>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li>• Make informed housing decisions</li>
              <li>• Understand your budget limitations</li>
              <li>• Plan your finances effectively</li>
              <li>• Avoid overextending your budget</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <FAQ />
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-500">
          <p>
            This calculator provides estimates for informational purposes only. Individual circumstances
            may vary, and we recommend consulting with a financial advisor for personalized advice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;