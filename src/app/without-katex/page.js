// Text taken from https://en.wikipedia.org/wiki/Quadratic_formula
const quadraticEquationTest = `Given a general quadratic equation of the form
$$ax^{2} + bx + c = 0$$
with $x$ representing an unknown, with $a$, $b$ and $c$ representing constants, and with $a \\ne 0$, the quadratic formula is:
$$x = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}$$`;

export default async function WithoutKatexPage() {
  return (
    <main className='bg-slate-300 w-[100dvw] h-[100dvh] flex justify-center items-center'>
      <div className='bg-slate-200 max-w-screen-sm flex justify-center items-center'>
        <span className='mx-20 my-20 text-xl'>
          {quadraticEquationTest}
        </span>
      </div>
    </main>
  );
}
