import Container from "@/components/ui/Container";

const Information = () => {
  return (
    <Container>
      <div>
        <div className="h-[326px] w-[319px] rounded-bl-xl rounded-br-xl bg-secondary">
          <div className="relative h-[166.50px] w-[242.68px] opacity-20"></div>
          <div className="relative h-[60px] w-[60px]">
            <div className="absolute left-0 top-0 h-[60px] w-[60px] rounded-full border border-stone-200" />
          </div>
          <div className="font-['Abril Display'] w-[185px] text-2xl font-semibold leading-[40.80px] tracking-tight text-stone-200">
            Play Intro Video
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Information;
