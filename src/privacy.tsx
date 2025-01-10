import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/App');
    };

    return (
        <div>
            <h1>Privacy Policy</h1>
            <p>Effective date: [Insert Date]</p>
            <h2>Introduction</h2>
            <p>This privacy policy explains how we collect, use, and disclose your personal information.</p>
            
            <h2>Information We Collect</h2>
            <ul>
                <li>Personal Information (e.g., name, email)</li>
                <li>Usage Data (e.g., how you use our service)</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Provide and maintain our service</li>
                <li>Notify you about changes to our service</li>
                <li>Allow you to participate in interactive features when you choose to do so</li>
                <li>Provide customer support</li>
                <li>Gather analysis or valuable information so that we can improve our service</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>Your information may be disclosed for:</p>
            <ul>
                <li>Compliance with a legal obligation</li>
                <li>Protection and defense of our rights or property</li>
                <li>Prevention of legal liability</li>
            </ul>

            <h2>Your Data Protection Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request deletion of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request transfer of your personal data.</li>
            </ul>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us:</p>
            <ul>
                <li>Email: [Your Email]</li>
                <li>Website: [Your Website]</li>
            </ul>

            {/* Next Button */}
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default PrivacyPolicy;
