import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { sendFutureCodeConfirmation } from '../lib/emailjs';
import './FutureCodeApply.css';

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  location: string;
  education: string;
  status: string;
  institution: string;
  referral_source: string;
  coding_level: string;
  tools: string;
  motivation: string;
  goals: string;
  full_twelve_weeks: string;
  two_sessions_week: string;
  internet_and_laptop: string;
  accurate: boolean;
  contact_consent: boolean;
  newsletter_opt_in: boolean;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  full_name: '',
  email: '',
  phone: '',
  date_of_birth: '',
  gender: '',
  location: '',
  education: '',
  status: '',
  institution: '',
  referral_source: '',
  coding_level: '',
  tools: '',
  motivation: '',
  goals: '',
  full_twelve_weeks: '',
  two_sessions_week: '',
  internet_and_laptop: '',
  accurate: false,
  contact_consent: false,
  newsletter_opt_in: false,
};

function wordCount(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!form.full_name.trim() || form.full_name.trim().split(/\s+/).length < 2)
    errors.full_name = 'Please enter your full name (first and last).';
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Please enter a valid email address.';
  if (!form.phone.trim())
    errors.phone = 'Phone number is required.';
  if (!form.date_of_birth)
    errors.date_of_birth = 'Date of birth is required.';
  if (!form.gender)
    errors.gender = 'Please select your gender.';
  if (!form.location.trim())
    errors.location = 'Please enter your city and region.';
  if (!form.education)
    errors.education = 'Please select your education level.';
  if (!form.status)
    errors.status = 'Please select your current status.';
  if (!form.referral_source)
    errors.referral_source = 'Please tell us how you heard about Future Code.';
  if (!form.coding_level)
    errors.coding_level = 'Please select your coding experience level.';
  if (wordCount(form.motivation) < 50)
    errors.motivation = 'Please write at least 50 words about why you want to join.';
  if (!form.goals.trim())
    errors.goals = 'Please share what you would like to build or learn.';
  if (!form.full_twelve_weeks)
    errors.full_twelve_weeks = 'Please answer this commitment question.';
  if (!form.two_sessions_week)
    errors.two_sessions_week = 'Please answer this commitment question.';
  if (!form.internet_and_laptop)
    errors.internet_and_laptop = 'Please answer this logistics question.';
  if (!form.accurate)
    errors.accurate = 'Please confirm your information is accurate.';
  if (!form.contact_consent)
    errors.contact_consent = 'Please consent to being contacted about your application.';

  return errors;
}

const SECTIONS = [
  { key: 'A', label: 'Personal details' },
  { key: 'B', label: 'Background' },
  { key: 'C', label: 'Experience & motivation' },
  { key: 'D', label: 'Commitment & logistics' },
  { key: 'E', label: 'Consent' },
];

export const FutureCodeApply: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTimeout(() => {
        document.querySelector('.fca-field-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      const { error } = await supabase.from('future_code_applications').insert([{
        full_name: form.full_name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        date_of_birth: form.date_of_birth,
        gender: form.gender,
        location: form.location.trim(),
        education: form.education,
        status: form.status,
        institution: form.institution.trim() || null,
        referral_source: form.referral_source,
        coding_level: form.coding_level,
        tools: form.tools.trim() || null,
        motivation: form.motivation.trim(),
        goals: form.goals.trim(),
        full_twelve_weeks: form.full_twelve_weeks,
        two_sessions_week: form.two_sessions_week,
        internet_and_laptop: form.internet_and_laptop,
        accurate: form.accurate,
        contact_consent: form.contact_consent,
        newsletter_opt_in: form.newsletter_opt_in,
      }]);

      if (error) throw error;

      sendFutureCodeConfirmation({
        to_name: form.full_name.trim(),
        to_email: form.email.trim().toLowerCase(),
        cohort: 'Future Code Cohort 2',
      }).catch(err => console.error('EmailJS error (non-blocking):', err));

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setSubmitError('Something went wrong. Please try again or contact us at info@databloomafrica.com.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="fca-success-screen">
        <div className="fca-success-card">
          <div className="fca-success-icon">✓</div>
          <h2>Application received.</h2>
          <p>
            Thanks for applying to Future Code Cohort 2. We review every application carefully,
            and only qualified applicants will be contacted for an interview, by email or WhatsApp.
            Places are limited to 30, so early applicants are prioritized. Check your inbox for a
            confirmation email.
          </p>
          <Link to="/programs/future-code" className="fca-btn-secondary">
            ← Back to Future Code
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fca-page">

      {/* ── Page header ── */}
      <div className="fca-page-header">
        <div className="fca-page-header-inner">
          <Link to="/programs/future-code" className="fca-back-link">
            ← Future Code Cohort 2
          </Link>
          <div className="fca-header-meta">
            <span className="fca-cohort-tag">Cohort 2</span>
            <span className="fca-header-deadline">Starts 3 August 2026 · 30 places</span>
          </div>
        </div>
      </div>

      <div className="fca-layout">

        {/* ── Sidebar ── */}
        <aside className="fca-sidebar">
          <div className="fca-sidebar-inner">
            <p className="fca-sidebar-title">Application sections</p>
            <ul className="fca-section-nav">
              {SECTIONS.map(s => (
                <li key={s.key}>
                  <a href={`#section-${s.key}`} className="fca-section-nav-item">
                    <span className="fca-nav-key">{s.key}</span>
                    <span className="fca-nav-label">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="fca-sidebar-note">
              <p>All fields marked <span className="fca-req">*</span> are required.</p>
              <p>Your data is submitted securely to DataBloom Africa.</p>
            </div>
          </div>
        </aside>

        {/* ── Form ── */}
        <main className="fca-main">
          <div className="fca-form-header">
            <h1>Apply for Future Code Cohort 2</h1>
            <p>Complete all sections below. We review every application carefully.</p>
          </div>

          <form className="fca-form" onSubmit={handleSubmit} noValidate>

            {/* ── Section A ── */}
            <section className="fca-form-section" id="section-A">
              <div className="fca-section-header">
                <span className="fca-section-key">A</span>
                <h2>Personal details</h2>
              </div>

              <div className="fca-field">
                <label htmlFor="full_name">Full name <span className="fca-req">*</span></label>
                <input
                  id="full_name" name="full_name" type="text"
                  value={form.full_name} onChange={handleChange}
                  placeholder="First and last name"
                  aria-describedby={errors.full_name ? 'err-full_name' : undefined}
                  className={errors.full_name ? 'fca-input-err' : ''}
                />
                {errors.full_name && <span id="err-full_name" className="fca-field-error">{errors.full_name}</span>}
              </div>

              <div className="fca-field">
                <label htmlFor="email">Email address <span className="fca-req">*</span></label>
                <input
                  id="email" name="email" type="email"
                  value={form.email} onChange={handleChange}
                  placeholder="you@example.com"
                  aria-describedby={errors.email ? 'err-email' : undefined}
                  className={errors.email ? 'fca-input-err' : ''}
                />
                {errors.email && <span id="err-email" className="fca-field-error">{errors.email}</span>}
              </div>

              <div className="fca-field">
                <label htmlFor="phone">Phone number (WhatsApp) <span className="fca-req">*</span></label>
                <input
                  id="phone" name="phone" type="tel"
                  value={form.phone} onChange={handleChange}
                  placeholder="+233 XX XXX XXXX"
                  aria-describedby={errors.phone ? 'err-phone' : undefined}
                  className={errors.phone ? 'fca-input-err' : ''}
                />
                <span className="fca-hint">Used for cohort communications via WhatsApp.</span>
                {errors.phone && <span id="err-phone" className="fca-field-error">{errors.phone}</span>}
              </div>

              <div className="fca-field-row">
                <div className="fca-field">
                  <label htmlFor="date_of_birth">Date of birth <span className="fca-req">*</span></label>
                  <input
                    id="date_of_birth" name="date_of_birth" type="date"
                    value={form.date_of_birth} onChange={handleChange}
                    aria-describedby={errors.date_of_birth ? 'err-dob' : undefined}
                    className={errors.date_of_birth ? 'fca-input-err' : ''}
                  />
                  {errors.date_of_birth && <span id="err-dob" className="fca-field-error">{errors.date_of_birth}</span>}
                </div>

                <div className="fca-field">
                  <label htmlFor="gender">Gender <span className="fca-req">*</span></label>
                  <select
                    id="gender" name="gender"
                    value={form.gender} onChange={handleChange}
                    aria-describedby={errors.gender ? 'err-gender' : undefined}
                    className={errors.gender ? 'fca-input-err' : ''}
                  >
                    <option value="">Select…</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  {errors.gender && <span id="err-gender" className="fca-field-error">{errors.gender}</span>}
                </div>
              </div>

              <div className="fca-field">
                <label htmlFor="location">Location (City, Region) <span className="fca-req">*</span></label>
                <input
                  id="location" name="location" type="text"
                  value={form.location} onChange={handleChange}
                  placeholder="e.g. Accra, Greater Accra"
                  aria-describedby={errors.location ? 'err-location' : undefined}
                  className={errors.location ? 'fca-input-err' : ''}
                />
                {errors.location && <span id="err-location" className="fca-field-error">{errors.location}</span>}
              </div>
            </section>

            {/* ── Section B ── */}
            <section className="fca-form-section" id="section-B">
              <div className="fca-section-header">
                <span className="fca-section-key">B</span>
                <h2>Background</h2>
              </div>

              <div className="fca-field-row">
                <div className="fca-field">
                  <label htmlFor="education">Highest level of education <span className="fca-req">*</span></label>
                  <select
                    id="education" name="education"
                    value={form.education} onChange={handleChange}
                    aria-describedby={errors.education ? 'err-education' : undefined}
                    className={errors.education ? 'fca-input-err' : ''}
                  >
                    <option value="">Select…</option>
                    <option value="Secondary">Secondary</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.education && <span id="err-education" className="fca-field-error">{errors.education}</span>}
                </div>

                <div className="fca-field">
                  <label htmlFor="status">Current status <span className="fca-req">*</span></label>
                  <select
                    id="status" name="status"
                    value={form.status} onChange={handleChange}
                    aria-describedby={errors.status ? 'err-status' : undefined}
                    className={errors.status ? 'fca-input-err' : ''}
                  >
                    <option value="">Select…</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.status && <span id="err-status" className="fca-field-error">{errors.status}</span>}
                </div>
              </div>

              <div className="fca-field">
                <label htmlFor="institution">Institution / Employer <span className="fca-opt">(optional)</span></label>
                <input
                  id="institution" name="institution" type="text"
                  value={form.institution} onChange={handleChange}
                  placeholder="School, company, or organization"
                />
              </div>

              <div className="fca-field">
                <label htmlFor="referral_source">How did you hear about Future Code? <span className="fca-req">*</span></label>
                <select
                  id="referral_source" name="referral_source"
                  value={form.referral_source} onChange={handleChange}
                  aria-describedby={errors.referral_source ? 'err-referral' : undefined}
                  className={errors.referral_source ? 'fca-input-err' : ''}
                >
                  <option value="">Select…</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Friend or referral">Friend or referral</option>
                  <option value="DataBloom event or club">DataBloom event or club</option>
                  <option value="Other">Other</option>
                </select>
                {errors.referral_source && <span id="err-referral" className="fca-field-error">{errors.referral_source}</span>}
              </div>
            </section>

            {/* ── Section C ── */}
            <section className="fca-form-section" id="section-C">
              <div className="fca-section-header">
                <span className="fca-section-key">C</span>
                <h2>Experience &amp; motivation</h2>
              </div>

              <div className="fca-field">
                <label htmlFor="coding_level">Prior coding experience <span className="fca-req">*</span></label>
                <select
                  id="coding_level" name="coding_level"
                  value={form.coding_level} onChange={handleChange}
                  aria-describedby={errors.coding_level ? 'err-coding' : undefined}
                  className={errors.coding_level ? 'fca-input-err' : ''}
                >
                  <option value="">Select…</option>
                  <option value="None">None</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Some">Some</option>
                  <option value="Intermediate+">Intermediate+</option>
                </select>
                {errors.coding_level && <span id="err-coding" className="fca-field-error">{errors.coding_level}</span>}
              </div>

              <div className="fca-field">
                <label htmlFor="tools">Languages / tools you've touched <span className="fca-opt">(optional)</span></label>
                <input
                  id="tools" name="tools" type="text"
                  value={form.tools} onChange={handleChange}
                  placeholder="e.g. Python, HTML, Excel, SQL"
                />
              </div>

              <div className="fca-field">
                <label htmlFor="motivation">
                  Why do you want to join Future Code? <span className="fca-req">*</span>
                </label>
                <textarea
                  id="motivation" name="motivation"
                  value={form.motivation} onChange={handleChange}
                  rows={6}
                  placeholder="Tell us your story and motivation (at least 50 words)…"
                  aria-describedby={errors.motivation ? 'err-motivation' : undefined}
                  className={errors.motivation ? 'fca-input-err' : ''}
                />
                <span className="fca-hint">
                  {wordCount(form.motivation) > 0
                    ? `${wordCount(form.motivation)} words`
                    : 'Minimum 50 words required'}
                </span>
                {errors.motivation && <span id="err-motivation" className="fca-field-error">{errors.motivation}</span>}
              </div>

              <div className="fca-field">
                <label htmlFor="goals">What would you like to build or learn? <span className="fca-req">*</span></label>
                <textarea
                  id="goals" name="goals"
                  value={form.goals} onChange={handleChange}
                  rows={4}
                  placeholder="Describe what you hope to create or the skills you want to gain…"
                  aria-describedby={errors.goals ? 'err-goals' : undefined}
                  className={errors.goals ? 'fca-input-err' : ''}
                />
                {errors.goals && <span id="err-goals" className="fca-field-error">{errors.goals}</span>}
              </div>
            </section>

            {/* ── Section D ── */}
            <section className="fca-form-section" id="section-D">
              <div className="fca-section-header">
                <span className="fca-section-key">D</span>
                <h2>Commitment &amp; logistics</h2>
              </div>

              <div className="fca-field">
                <fieldset className="fca-fieldset">
                  <legend>Can you commit to the full 12 weeks (3 August start)? <span className="fca-req">*</span></legend>
                  <div className="fca-radio-group">
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className="fca-radio-label">
                        <input
                          type="radio" name="full_twelve_weeks" value={opt}
                          checked={form.full_twelve_weeks === opt}
                          onChange={handleChange}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.full_twelve_weeks && <span className="fca-field-error">{errors.full_twelve_weeks}</span>}
                </fieldset>
              </div>

              <div className="fca-field">
                <fieldset className="fca-fieldset">
                  <legend>Can you attend 2 sessions/week in the Skill Phase? <span className="fca-req">*</span></legend>
                  <div className="fca-radio-group">
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className="fca-radio-label">
                        <input
                          type="radio" name="two_sessions_week" value={opt}
                          checked={form.two_sessions_week === opt}
                          onChange={handleChange}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.two_sessions_week && <span className="fca-field-error">{errors.two_sessions_week}</span>}
                </fieldset>
              </div>

              <div className="fca-field">
                <fieldset className="fca-fieldset">
                  <legend>Do you have reliable internet and a laptop? <span className="fca-req">*</span></legend>
                  <div className="fca-radio-group">
                    {['Yes', 'No', 'Partially'].map(opt => (
                      <label key={opt} className="fca-radio-label">
                        <input
                          type="radio" name="internet_and_laptop" value={opt}
                          checked={form.internet_and_laptop === opt}
                          onChange={handleChange}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.internet_and_laptop && <span className="fca-field-error">{errors.internet_and_laptop}</span>}
                </fieldset>
              </div>
            </section>

            {/* ── Section E ── */}
            <section className="fca-form-section" id="section-E">
              <div className="fca-section-header">
                <span className="fca-section-key">E</span>
                <h2>Consent</h2>
              </div>

              <div className="fca-field">
                <label className="fca-checkbox-label">
                  <input
                    type="checkbox" name="accurate"
                    checked={form.accurate} onChange={handleChange}
                    aria-describedby={errors.accurate ? 'err-accurate' : undefined}
                  />
                  <span>I confirm the information provided is accurate. <span className="fca-req">*</span></span>
                </label>
                {errors.accurate && <span id="err-accurate" className="fca-field-error">{errors.accurate}</span>}
              </div>

              <div className="fca-field">
                <label className="fca-checkbox-label">
                  <input
                    type="checkbox" name="contact_consent"
                    checked={form.contact_consent} onChange={handleChange}
                    aria-describedby={errors.contact_consent ? 'err-consent' : undefined}
                  />
                  <span>I consent to DataBloom contacting me about my application. <span className="fca-req">*</span></span>
                </label>
                {errors.contact_consent && <span id="err-consent" className="fca-field-error">{errors.contact_consent}</span>}
              </div>

              <div className="fca-field">
                <label className="fca-checkbox-label">
                  <input
                    type="checkbox" name="newsletter_opt_in"
                    checked={form.newsletter_opt_in} onChange={handleChange}
                  />
                  <span>I'd like to receive DataBloom updates (newsletter, events). <span className="fca-opt">(optional)</span></span>
                </label>
              </div>
            </section>

            {/* ── Submit ── */}
            {submitError && (
              <div className="fca-submit-error" role="alert">{submitError}</div>
            )}

            <div className="fca-submit-row">
              <button
                type="submit"
                className="fca-btn-primary"
                disabled={submitting}
              >
                {submitting ? 'Submitting…' : 'Submit application'}
              </button>
              <p className="fca-submit-note">
                Only qualified applicants will be contacted for an interview.
              </p>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
};
