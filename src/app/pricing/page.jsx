import CTASection from "@/components/CTASection";
import Plans from "@/components/pricing/Plans";

function Pricing() {
  return (
    <>
      <Plans />
      <CTASection sectionClassName="cta-section cta-section--pricing" />
    </>
  );
}

export default Pricing;
