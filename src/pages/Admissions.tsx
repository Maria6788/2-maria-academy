import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle,
  FileText,
  DollarSign,
  User,
  Mail,
  Phone,
  Home,
  GraduationCap,
  ChevronRight,
  ShieldAlert,
  Loader2,
  Lock
} from 'lucide-react';

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    prevSchool: '',
    declaration: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAppNo, setSubmittedAppNo] = useState<string | null>(null);

  const steps = [
    { title: '1. Online Application', desc: 'Fill out the candidate registration details and parent credentials via our secure form below.' },
    { title: '2. Review & Assessment', desc: 'Syllabus tests and interaction scheduled at campus for grades 1-12. No test for Kindergarten.' },
    { title: '3. Credentials Verification', desc: 'Submit previous academic transcript files, birth registration certificates, and healthcare clearances.' },
    { title: '4. Seat Booking & Fees', desc: 'Receive the formal admission offer letter, submit the caution deposit, and finalize enrollment papers.' }
  ];

  const eligibilityCriterias = [
    { grade: 'Kindergarten', age: '3 to 5 years as of August 1st of admission year.' },
    { grade: 'Primary (Grades 1-5)', age: '6 years minimum. Must have completed preceding preschool grades.' },
    { grade: 'Middle (Grades 6-8)', age: 'Transcripts confirming successful grade clearances from accredited centers.' },
    { grade: 'High School (Grades 9-12)', age: 'Transcripts + math & reading cognitive interaction tests.' }
  ];

  const requiredDocs = [
    'Candidate Birth Registration Certificate copy.',
    'Official academic transcripts/reports of preceding 2 academic sessions.',
    'Original Transfer Certificate / Clearance Certificate from preceding center.',
    'Immunization card, vaccine details, and physical health fitness certificate.',
    '2 passport-size photographs of candidate and both parents.',
    'Residential proof documents (Utility bill, lease, or passport).'
  ];

  const fees = [
    { tier: 'Early Explorers Kindergarten', regFee: '$150', annualTuition: '$4,200', cautionDeposit: '$300' },
    { tier: 'Primary Foundation (Grades 1-5)', regFee: '$150', annualTuition: '$5,800', cautionDeposit: '$400' },
    { tier: 'Middle Scholars (Grades 6-8)', regFee: '$150', annualTuition: '$6,900', cautionDeposit: '$450' },
    { tier: 'High School AP (Grades 9-12)', regFee: '$150', annualTuition: '$8,200', cautionDeposit: '$500' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.studentName.trim()) errors.studentName = 'Student name is required';
    if (!formData.dob) errors.dob = 'Date of birth is required';
    if (!formData.grade) errors.grade = 'Please select a grade level';
    if (!formData.parentName.trim()) errors.parentName = 'Parent or guardian name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      errors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (formData.phone.length < 7) {
      errors.phone = 'Enter a valid phone number';
    }
    if (!formData.address.trim()) errors.address = 'Residential address is required';
    if (!formData.declaration) errors.declaration = 'You must accept the school declaration to proceed';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const randomAppNo = `APP-2026-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmittedAppNo(randomAppNo);
        // Clear Form
        setFormData({
          studentName: '',
          dob: '',
          grade: '',
          parentName: '',
          email: '',
          phone: '',
          address: '',
          prevSchool: '',
          declaration: false
        });
      }, 2000);
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-white" id="admissions-page-container">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-600/15 z-10" />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">
            JOIN Maria ACADEMY
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Admissions, Eligibility & Enrollment
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Take your first step today towards a life of academic honors, scientific logic, and positive leadership.
          </p>
        </div>
      </section>

      {/* 1. Admission Stepper Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="admissions-process-stepper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              TIMELINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Our 4-Step Admissions Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 relative hover:shadow-md transition-all flex flex-col"
              >
                <div className="text-blue-600 font-extrabold text-xs tracking-widest block mb-3 uppercase">
                  Step {idx + 1}
                </div>
                <h3 className="font-bold text-slate-950 text-base mb-2">{st.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Eligibility & Documents Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100" id="admissions-eligibility-docs">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Eligibility Column */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-xl text-slate-900 tracking-tight">
                  Age & Grade Eligibility
                </h3>
              </div>
              <div className="divide-y divide-slate-100 space-y-4">
                {eligibilityCriterias.map((el, idx) => (
                  <div key={idx} className="pt-4 first:pt-0">
                    <h4 className="font-bold text-slate-950 text-sm sm:text-base mb-1">{el.grade}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{el.age}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents Column */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-xl text-slate-900 tracking-tight">
                  Required Enclosures Folder
                </h3>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed">
                Parents are requested to scan and compile the following original files prior to scheduled interviews.
              </p>
              <ul className="space-y-3">
                {requiredDocs.map((doc, idx) => (
                  <li key={idx} className="flex gap-3 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Fee Structure Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="admissions-fees">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              TUITION FEES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Fee Schedules Academic Year 2026-27
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
              Maria maintains an honest, itemized annual tuition standard with no hidden development levies.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 text-xs font-semibold uppercase tracking-wider pb-3">
                    <th className="py-3 px-4">Academic Tier</th>
                    <th className="py-3 px-4">Registration Fee</th>
                    <th className="py-3 px-4">Annual Tuition</th>
                    <th className="py-3 px-4 text-right">Caution Deposit (Refundable)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {fees.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-slate-100/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900">{fee.tier}</td>
                      <td className="py-4 px-4 text-slate-600">{fee.regFee}</td>
                      <td className="py-4 px-4 text-slate-600">{fee.annualTuition}</td>
                      <td className="py-4 px-4 text-right font-semibold text-slate-900">{fee.cautionDeposit}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
            </div>

            <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4 mt-6">
              <DollarSign className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>Financial Aid & Scholarship Slabs:</strong> Merit scholarship reductions of 20% to 50% are applicable based on term exams or income declarations. Please contact the admissions coordinator before the caution payment deadlines.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Interactive Online Application Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100" id="admissions-form">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100">
            {submittedAppNo ? (
              // Success Receipt Panel
              <div className="text-center py-8 flex flex-col items-center gap-5" id="admission-success-panel">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-extrabold text-2xl text-slate-950 tracking-tight">
                  Application Submitted Successfully!
                </h3>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 w-full max-w-md text-left">
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 text-center">
                    Official Candidate Receipt
                  </span>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Application ID:</span>
                      <strong className="text-blue-600 font-mono font-bold">{submittedAppNo}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scheduled Date:</span>
                      <strong className="text-slate-900">{new Date().toLocaleDateString()}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Verification Steps:</span>
                      <strong className="text-amber-600 font-semibold">Pending assessment mail</strong>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md">
                  We have dispatched a detailed verification PDF catalog, credentials check sheet, and interview booking link to your registered email address.
                </p>
                <button
                  onClick={() => setSubmittedAppNo(null)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              // Actual Form Content
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6" id="admission-actual-form">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="font-extrabold text-xl text-slate-900 tracking-tight">
                    Online Candidate Registration 2026-27
                  </h3>
                  <span className="text-slate-400 text-xs">Complete the secured application fields. All star (*) elements are compulsory.</span>
                </div>

                {/* Candidate Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Student Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="studentName"
                        required
                        placeholder="Ethan Hunt"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border focus:bg-white rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm focus:outline-none focus:ring-1 ${
                          formErrors.studentName
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'
                        }`}
                      />
                    </div>
                    {formErrors.studentName && (
                      <span className="text-red-500 text-[10px] mt-1 block">{formErrors.studentName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Candidate Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border focus:bg-white border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-xl py-2.5 px-4 text-xs sm:text-sm focus:outline-none"
                    />
                    {formErrors.dob && (
                      <span className="text-red-500 text-[10px] mt-1 block">{formErrors.dob}</span>
                    )}
                  </div>
                </div>

                {/* Applying Grade Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Grade level Applying For *
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      name="grade"
                      required
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border focus:bg-white border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm focus:outline-none appearance-none"
                    >
                      <option value="">Select Target Class Grade</option>
                      <option value="kindergarten">Early Explorers Kindergarten</option>
                      <option value="primary">Primary Foundation (Grades 1-5)</option>
                      <option value="middle">Middle Scholars (Grades 6-8)</option>
                      <option value="high">High School AP & Scholars (Grades 9-12)</option>
                    </select>
                  </div>
                  {formErrors.grade && (
                    <span className="text-red-500 text-[10px] mt-1 block">{formErrors.grade}</span>
                  )}
                </div>

                {/* Parent Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      placeholder="Jonathan Hunt"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border focus:bg-white border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-xl py-2.5 px-4 text-xs sm:text-sm focus:outline-none"
                    />
                    {formErrors.parentName && (
                      <span className="text-red-500 text-[10px] mt-1 block">{formErrors.parentName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Previous School Name (If any)
                    </label>
                    <input
                      type="text"
                      name="prevSchool"
                      placeholder="Lincoln Middle School"
                      value={formData.prevSchool}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border focus:bg-white border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-xl py-2.5 px-4 text-xs sm:text-sm focus:outline-none"
                    />
                  </div>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Active Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="j.hunt@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border focus:bg-white border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm focus:outline-none"
                      />
                    </div>
                    {formErrors.email && (
                      <span className="text-red-500 text-[10px] mt-1 block">{formErrors.email}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Contact Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border focus:bg-white border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm focus:outline-none"
                      />
                    </div>
                    {formErrors.phone && (
                      <span className="text-red-500 text-[10px] mt-1 block">{formErrors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Address Field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Residential Address *
                  </label>
                  <textarea
                    name="address"
                    rows={3}
                    required
                    placeholder="404 Elm Street, Academic Hills, NY 10023"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border focus:bg-white border-slate-200 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-xl p-4 text-xs sm:text-sm focus:outline-none"
                  />
                  {formErrors.address && (
                    <span className="text-red-500 text-[10px] mt-1 block">{formErrors.address}</span>
                  )}
                </div>

                {/* Declaration Checkbox */}
                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs sm:text-sm text-slate-600 select-none">
                    <input
                      type="checkbox"
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleInputChange}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 mt-1"
                    />
                    <span>
                      I hereby declare that all provided candidate details, age credentials, and history records are authentic. I agree to support school interaction assess rules.
                    </span>
                  </label>
                  {formErrors.declaration && (
                    <span className="text-red-500 text-[10px] mt-1 block font-bold">{formErrors.declaration}</span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-6 rounded-xl text-sm sm:text-base transition-all shadow-md shadow-blue-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Registration Form...
                    </>
                  ) : (
                    <>
                      Submit Application Securely
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <div className="flex justify-center items-center gap-1 text-[10px] text-slate-400">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Your registration session data is end-to-end encrypted under school firewalls.</span>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
  );
}
