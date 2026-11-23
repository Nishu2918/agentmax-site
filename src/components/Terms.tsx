const TERMS = [
  "All payments made through the payment gateway are final and non-cancellable. Once a transaction is successfully processed, no cancellation requests will be entertained.",
  "Failure to attend, participate or utilise the services for which payment has been made (“no-show”) shall not entitle the user to a refund, either in full or in part.",
  "A paid registration may be transferred to another individual within the same organisation, provided that the transfer request is submitted before the official commencement of the hackathon.",
  "Verified duplicate debits will be refunded as per banking/payment processor timelines (if any).",
  "The organisers reserve the right, at their sole discretion, to cancel, postpone or reschedule the event. In such cases, participants will be notified, and the applicable refund or transfer policy will be communicated.",
  "The decision of the organisers regarding cancellations, refunds or transfers shall be final and binding.",
  "No refund or compensation shall be provided in the event of cancellation or disruption caused by circumstances beyond the control of the organisers, including but not limited to natural disasters, acts of government, network outages or other force majeure events.",
];

export function Terms() {
  return (
    <div className="min-h-screen bg-[#060b14] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-[#00ffff] underline">
          ← Back to home
        </a>
        <h1 className="mt-8 text-4xl font-bold text-[#00ffff]">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-lg text-white/90">Welcome to AgentMax!</p>
        <ul className="mt-8 flex flex-col gap-5">
          {TERMS.map((t, i) => (
            <li key={i} className="flex gap-3 text-white/80">
              <span className="text-[#00ffff]">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
