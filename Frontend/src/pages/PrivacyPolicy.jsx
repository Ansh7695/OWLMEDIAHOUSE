import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className="privacy-container w-full px-4 sm:px-8 md:px-10 mx-auto p-8 space-y-6 mt-35">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left text-gray-800">Privacy Policy</h1>
            <p className="text-lg sm:text-2xl text-gray-500">
                At owl media house  , we are committed to delivering top-notch design and
                digital marketing solutions. However, if our services do not meet your expectations, you may
                qualify for a refund under specific conditions.
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left text-gray-800">Monthly Retainer Services</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-500 text-lg sm:text-2xl">
                <li>First 7 Days: If you have subscribed to our monthly
                    retainer services and are dissatisfied, you must inform us within the initial 7 days. In
                    this case, you will be entitled to a full refund.
                </li>
                <li>No Refunds Beyond 7 Days: If you have used our services for 7 days and later choose to discontinue, you will not be eligible for a refund
                    for that month.
                </li>

            </ul>
            <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left text-gray-800">One-Time Services</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-500 text-lg sm:text-2xl">
                <li>Initial Draft: For one-time services, if you are not satisfied with the first draft of the
                    work delivered, you must inform us promptly. We will assess your feedback and
                    either make necessary revisions or provide a refund.
                </li>
                <li>No Refunds Post-Acceptance: After you approve the initial draft and additional
                    work is carried out, refunds will no longer be available.
                </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left text-gray-800">Refund Process</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-500 text-lg sm:text-2xl">
                <li>Refund Request Process: To initiate a refund request, please reach out to us at
                    info@owlmediahouse.in, providing your service details along with a clear explanation
                    of your reason for the request.
                </li>
                <li>Evaluation: We will assess your request and inform you whether your refund has
                    been approved or declined.
                </li>
                <li>
                    Confirmation: If your refund request is approved, we will initiate the process within
                    7 days. The amount will be refunded to your original payment method.

                </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left text-gray-800">Comments and Questions</h2>
            <p className="text-lg sm:text-2xl text-gray-500">
                If you have any questions, comments, or concerns about our Privacy Policy, please call us at +91 9045922719.
            </p>

        </div>
    )
}

export default PrivacyPolicy