'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import SolutionsGrid from './SolutionsGrid';
import ROICalculator from './ROICalculator';
import ComparisonMatrix from './ComparisonMatrix';
import IntegrationShowcase from './IntegrationShowcase';
import CTASection from './CTASection';

/* ---------------------------------------------------------
    FRESH FORM MODAL COMPONENT (INSIDE SAME FILE)
--------------------------------------------------------- */
// const FormModal = ({
//   isOpen,
//   onClose,
//   type,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   type: 'demo' | 'consultation';
// }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     message: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch(
//         'https://btc-linx-web-be.onrender.com/api/schedule/create',
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             companyname: formData.company,
//             phonenum: formData.phone,
//             message: formData.message,
//           }),
//         }
//       );

//       const data = await res.json();

//       if (res.ok) {
//         setSubmitted(true);

//         setTimeout(() => {
//           setSubmitted(false);
//           setLoading(false);
//           onClose();
//           setFormData({
//             name: '',
//             email: '',
//             company: '',
//             phone: '',
//             message: '',
//           });
//         }, 1800);
//       } else {
//         alert(data.message || 'Something went wrong');
//         setLoading(false);
//       }
//     } catch (err) {
//       alert('Network error');
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       {/* Fullscreen Loading Overlay */}
//       {loading && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]">
//           <div className="flex flex-col items-center gap-4">
//             <div className="h-12 w-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//             <p className="text-white text-lg">Submitting...</p>
//           </div>
//         </div>
//       )}

//       <div className="bg-white w-full max-w-md rounded-2xl p-6 relative z-[1000]">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           disabled={loading}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>

//         {/* Success Message */}
//         {submitted ? (
//           <div className="text-center py-10">
//             <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
//               <span className="text-green-600 text-3xl">✔</span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               Request Submitted!
//             </h3>
//             <p className="text-gray-600">
//               We’ll contact you within 24 hours.
//             </p>
//           </div>
//         ) : (
//           <>
//             <h3 className="text-2xl font-semibold mb-4">
//               {type === 'demo' ? 'Request Live Demo' : 'Schedule Consultation'}
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 value={formData.name}
//                 onChange={(e) => handleChange('name', e.target.value)}
//                 className="w-full p-3 border rounded-lg"
//               />

//               <input
//                 type="email"
//                 placeholder="Business Email"
//                 required
//                 value={formData.email}
//                 onChange={(e) => handleChange('email', e.target.value)}
//                 className="w-full p-3 border rounded-lg"
//               />

//               <input
//                 type="text"
//                 placeholder="Company Name"
//                 required
//                 value={formData.company}
//                 onChange={(e) => handleChange('company', e.target.value)}
//                 className="w-full p-3 border rounded-lg"
//               />

//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={(e) => handleChange('phone', e.target.value)}
//                 className="w-full p-3 border rounded-lg"
//               />

//               <textarea
//                 placeholder="Message"
//                 rows={3}
//                 value={formData.message}
//                 onChange={(e) => handleChange('message', e.target.value)}
//                 className="w-full p-3 border rounded-lg"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
//               >
//                 {type === 'demo' ? 'Request Demo' : 'Book Consultation'}
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };


/* ---------------------------------------------------------
    BEAUTIFULLY RESTYLED FORM MODAL
--------------------------------------------------------- */
const FormModal = ({
  isOpen,
  onClose,
  type,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: 'demo' | 'consultation';
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        'https://btc-linx-web-be.onrender.com/api/schedule/create',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            companyname: formData.company,
            phonenum: formData.phone,
            message: formData.message,
          }),
        }
      );

      if (res.ok) {
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          setLoading(false);
          onClose();
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            message: '',
          });
        }, 1800);
      } else {
        alert('Something went wrong');
        setLoading(false);
      }
    } catch (err) {
      alert('Network error');
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">

      {/* Fullscreen Loader */}
      {loading && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 border-4 border-white/40 border-t-white rounded-full animate-spin"></div>
            <p className="text-white text-lg">Submitting...</p>
          </div>
        </div>
      )}

      <div className="relative w-full max-w-lg rounded-3xl shadow-2xl bg-white/80 backdrop-blur-xl border border-white/20 p-8 animate-scaleIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          ✕
        </button>

        {/* Success Screen */}
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-md mb-4 animate-pop">
              ✔
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
            <p className="text-gray-600">
              We will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-900 text-center pb-2">
              {type === 'demo' ? 'Request a Live Demo' : 'Book a Consultation'}
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Fill out the details and our team will get in touch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              <input
                type="email"
                placeholder="Business Email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              <input
                type="text"
                placeholder="Company Name"
                required
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              <textarea
                placeholder="Message"
                rows={3}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
              >
                {type === 'demo' ? 'Request Demo' : 'Book Consultation'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};


/* ---------------------------------------------------------
    MAIN PAGE COMPONENT
--------------------------------------------------------- */
const SolutionsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'demo' | 'consultation'>('demo');


  const handleSelectSolution = (solutionId: string) => {
  if (solutionId === 'consultation') {
    setModalType('consultation');
    setModalOpen(true);
  }
  };

  const handleRequestCustomIntegration = () => {
  setModalType('consultation');   // opens consultation type modal
  setModalOpen(true);
};



  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const openDemoForm = () => {
    setModalType('demo');
    setModalOpen(true);
  };

  const openConsultationForm = () => {
    setModalType('consultation');
    setModalOpen(true);
  };

  if (!isHydrated) {
    return <div className="min-h-screen bg-gray-100"></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        onGetStarted={openConsultationForm}
        onViewDemo={openDemoForm}
      />

      <SolutionsGrid
        onLearnMore={() => {}}
        onRequestDemo={openDemoForm}
      />

      {/* <ROICalculator onCalculate={() => {}} /> */}

      {/* <ComparisonMatrix onSelectSolution={() => {}} /> */}
      <ComparisonMatrix 
  onSelectSolution={handleSelectSolution}
/>

      <IntegrationShowcase onLearnMore={() => {}}
      onRequestIntegration={handleRequestCustomIntegration} />

      <CTASection
        onGetStarted={openConsultationForm}
        onScheduleDemo={openDemoForm}
        onDownloadGuide={() => {}}
      />

      {/* Modal Inside Same File */}
      <FormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </div>
  );
};

export default SolutionsInteractive;
