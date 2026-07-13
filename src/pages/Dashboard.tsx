import { useState } from 'react';
import {
  STUDENT_PROFILE,
  STUDENT_COURSES,
  TIMETABLE,
  FEE_STATUS,
  UPCOMING_EXAMS,
  STUDENT_RESULTS,
  NOTICES
} from '../data/schoolData';
import {
  User,
  GraduationCap,
  Calendar,
  DollarSign,
  Award,
  Bell,
  CheckCircle,
  FileText,
  Clock,
  BookOpen,
  PieChart,
  HelpCircle,
  Wallet,
  Loader2
} from 'lucide-react';

export default function Dashboard() {
  const [activeTimetableDay, setActiveTimetableDay] = useState<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'>('Monday');
  const [payingFee, setPayingFee] = useState(false);
  const [feePaidSuccess, setFeePaidSuccess] = useState(false);

  const handlePayFee = () => {
    setPayingFee(true);
    setTimeout(() => {
      setPayingFee(false);
      setFeePaidSuccess(true);
    }, 2000);
  };

  const activeDaySchedule = TIMETABLE.find(t => t.day === activeTimetableDay);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8" id="student-dashboard">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Dashboard Title & Welcome */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-none">
              Student Portal Dashboard
            </h1>
            <span className="text-slate-500 text-xs sm:text-sm block mt-2">
              Welcome back, <strong className="text-blue-600 font-bold">{STUDENT_PROFILE.name}</strong> &middot; Track your attendance, exam rosters, and study progress.
            </span>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-xl uppercase tracking-wider block shrink-0">
            Term 2 Session Active
          </span>
        </div>

        {/* 1. Student Profile Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 sm:gap-8 items-center" id="dashboard-profile-banner">
          <div className="shrink-0 relative">
            <img
              src={STUDENT_PROFILE.avatar}
              alt={STUDENT_PROFILE.name}
              referrerPolicy="no-referrer"
              className="w-24 h-24 rounded-full object-cover border-4 border-slate-100 shadow"
            />
            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1.5 rounded-full shadow">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>

          {/* Profile particulars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 text-xs sm:text-sm flex-grow w-full md:w-auto">
            <div>
              <span className="text-slate-400 font-bold block mb-0.5 uppercase text-[10px]">Student Name</span>
              <strong className="text-slate-900 text-base font-bold">{STUDENT_PROFILE.name}</strong>
            </div>
            <div>
              <span className="text-slate-400 font-bold block mb-0.5 uppercase text-[10px]">Academic Class</span>
              <strong className="text-slate-900 font-semibold">{STUDENT_PROFILE.class} &bull; {STUDENT_PROFILE.section}</strong>
            </div>
            <div>
              <span className="text-slate-400 font-bold block mb-0.5 uppercase text-[10px]">Roll ID / Registration</span>
              <strong className="text-slate-900 font-mono font-semibold">{STUDENT_PROFILE.rollNo}</strong>
            </div>
            <div>
              <span className="text-slate-400 font-bold block mb-0.5 uppercase text-[10px]">Admission No</span>
              <strong className="text-slate-900 font-mono font-semibold">{STUDENT_PROFILE.admissionNo}</strong>
            </div>
          </div>

          {/* Attendance circular progress gauge */}
          <div className="shrink-0 border-l border-slate-150 pl-6 hidden sm:flex items-center gap-4" id="dashboard-attendance-widget">
            <div className="relative w-16 h-16 flex items-center justify-center bg-blue-50 text-blue-700 font-extrabold rounded-full">
              <span>{STUDENT_PROFILE.attendanceRate}%</span>
              <div className="absolute inset-0 rounded-full border-4 border-blue-600/10 border-t-blue-600 animate-spin-slow" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Attendance Rate</span>
              <span className="text-xs text-slate-500 font-semibold">Requirement: 85% min</span>
            </div>
          </div>
        </div>

        {/* 2. Main Dashboard Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT 8-COLS: Core Academic Modules */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Module 2.1: Enrolled Courses & Progress */}
            <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm" id="dashboard-enrolled-courses">
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-100">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h2 className="font-extrabold text-lg text-slate-900 tracking-tight">
                  Enrolled Course Progressions
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {STUDENT_COURSES.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-3"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <strong className="block text-slate-900 text-sm font-bold">{course.name}</strong>
                        <span className="text-slate-400 font-mono text-[10px]">{course.code} &bull; {course.teacher}</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 font-extrabold text-[10px] px-2 py-0.5 rounded uppercase">
                        Grade {course.grade}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase mb-1">
                        <span>Pacing Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-600 h-full rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Module 2.2: Results Table */}
            <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm" id="dashboard-exam-results">
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-100">
                <Award className="w-5 h-5 text-blue-600" />
                <h2 className="font-extrabold text-lg text-slate-900 tracking-tight">
                  Term 1 Assessment Report Sheets
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[550px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 text-xs font-semibold uppercase tracking-wider pb-2">
                      <th className="py-2.5 px-3">Subject Module</th>
                      <th className="py-2.5 px-3">Assessment Name</th>
                      <th className="py-2.5 px-3 text-center">Score Ratio</th>
                      <th className="py-2.5 px-3 text-center">Grade Letter</th>
                      <th className="py-2.5 px-3 text-right">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {STUDENT_RESULTS.map((res) => (
                      <tr key={res.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3 font-bold text-slate-900">{res.subject}</td>
                        <td className="py-3 px-3 text-slate-500">{res.examName}</td>
                        <td className="py-3 px-3 text-center font-mono font-bold text-slate-950">{res.score} / {res.maxScore}</td>
                        <td className="py-3 px-3 text-center">
                          <span className="inline-block bg-blue-50 text-blue-700 font-extrabold text-xs px-2 py-0.5 rounded">
                            {res.grade}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right text-slate-500 text-xs">{res.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Module 2.3: Student Notices bulletin */}
            <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm" id="dashboard-portal-notices">
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-100">
                <Bell className="w-5 h-5 text-blue-600" />
                <h2 className="font-extrabold text-lg text-slate-900 tracking-tight">
                  Student Portal circular bulletins
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-2xl">
                  <span className="text-amber-700 font-bold text-[10px] uppercase block mb-1">Oct 28, 2026</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Homework Guidelines Regarding Fall Breaks</h4>
                  <p className="text-slate-600 text-xs">Students are advised to check individual course lockers inside the portal for chapter exercises regarding Thanksgiving recess weeks.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                  <span className="text-slate-400 font-bold text-[10px] uppercase block mb-1">Oct 24, 2026</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Registration Open for Winter Symphonic rehearsals</h4>
                  <p className="text-slate-600 text-xs">Orchestral schedules are available. Rehearsals will commence on Monday, Nov 9th after class hours in auditorium wings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 4-COLS: Scheduling, Exams, & Financials */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Widget 2.4: Daily Timetable Selector */}
            <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm" id="dashboard-timetable">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="font-extrabold text-base text-slate-950 tracking-tight">
                  Daily Class Timetable
                </h3>
              </div>

              {/* Day filter selectors */}
              <div className="flex flex-wrap gap-1 mb-4" id="dashboard-timetable-tabs">
                {(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const).map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveTimetableDay(day)}
                    className={`px-2 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${
                      activeTimetableDay === day
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {day.substring(0, 3)}
                  </button>
                ))}
              </div>

              {/* Day List */}
              <div className="flex flex-col gap-3">
                {activeDaySchedule?.slots.map((slot, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex flex-col gap-1 text-xs"
                  >
                    <div className="flex justify-between font-mono font-semibold text-slate-400 text-[10px]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-500" />
                        {slot.time}
                      </span>
                      <span>{slot.room}</span>
                    </div>
                    <strong className="block text-slate-900 text-xs sm:text-sm font-bold">{slot.subject}</strong>
                    <span className="text-[10px] text-slate-500">{slot.teacher}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 2.5: Fee Status Panel */}
            <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm" id="dashboard-fees">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <Wallet className="w-5 h-5 text-blue-600" />
                <h3 className="font-extrabold text-base text-slate-950 tracking-tight">
                  My Fee Accounts Status
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3 text-center bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="border-r border-slate-200 pr-1">
                    <span className="text-slate-400 font-bold block mb-0.5 uppercase text-[9px]">Total Billed</span>
                    <strong className="text-slate-950 font-bold text-sm sm:text-base">${FEE_STATUS.totalAmount}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block mb-0.5 uppercase text-[9px]">Pending</span>
                    <strong className="text-red-600 font-bold text-sm sm:text-base">${FEE_STATUS.pendingAmount}</strong>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-500 leading-normal flex justify-between border-b border-slate-100 pb-3">
                  <span>Due Date:</span>
                  <strong className="text-slate-900 font-semibold">{FEE_STATUS.dueDate}</strong>
                </div>

                {feePaidSuccess ? (
                  <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs p-3.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2 animate-fade-in">
                    <CheckCircle className="w-4 h-4" />
                    Pending Fee Settled Successfully!
                  </div>
                ) : (
                  <button
                    onClick={handlePayFee}
                    disabled={payingFee}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    {payingFee ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing payment gate...
                      </>
                    ) : (
                      <>
                        <DollarSign className="w-3.5 h-3.5" />
                        Pay Pending Fee (${FEE_STATUS.pendingAmount})
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Widget 2.6: Upcoming Exams */}
            <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm" id="dashboard-upcoming-exams">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-extrabold text-base text-slate-950 tracking-tight">
                  Upcoming Exam Rosters
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {UPCOMING_EXAMS.map((exam) => (
                  <div
                    key={exam.id}
                    className="p-3 bg-red-50/50 border border-red-100 rounded-xl flex flex-col gap-1 text-xs"
                  >
                    <span className="text-red-700 font-bold text-[10px] uppercase block">
                      {exam.date}
                    </span>
                    <strong className="block text-slate-900 font-bold text-xs sm:text-sm leading-tight">
                      {exam.subject}
                    </strong>
                    <div className="flex justify-between text-slate-400 font-mono text-[9px] mt-1">
                      <span>{exam.time}</span>
                      <span>{exam.room}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
