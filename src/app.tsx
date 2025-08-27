// import { useState } from 'preact/hooks'
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
// import './app.css'

// export function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} class="logo" alt="Vite logo" />
//         </a>
//         <a href="https://preactjs.com" target="_blank">
//           <img src={preactLogo} class="logo preact" alt="Preact logo" />
//         </a>
//       </div>
//       <h1>Vite + Preact</h1>
//       <div class="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/app.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p>
//         Check out{' '}
//         <a
//           href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
//           target="_blank"
//         >
//           create-preact
//         </a>
//         , the official Preact + Vite starter
//       </p>
//       <p class="read-the-docs">
//         Click on the Vite and Preact logos to learn more
//       </p>
//     </>
//   )
// }
import { useState } from 'preact/hooks'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="w-full max-w-sm rounded-2xl border bg-white p-6 shadow">
        <h1 class="text-xl font-semibold">Vite + Preact + Tailwind v4</h1>
        <p class="mt-2 text-sm text-gray-600">
          If Tailwind works, this text is gray and
          <span class="ml-1 font-medium text-brand-500">this bit is brand-500.</span>
        </p>

        <p class="mt-2 text-sm text-gray-600">
          This is a fresh change
          <span class="ml-1 font-medium text-brand-500">to see netlify is running..</span>
        </p>

        <p class="text-gray-600">
          If Tailwind is active, this should be gray-600, not white.
          <span class="text-brand-500 font-medium ml-1">This bit should be brand-500.</span>
        </p>

        <div class="mt-6 flex items-center justify-center gap-3">
          <button
            class="px-3 py-2 rounded-xl border hover:bg-gray-100 active:scale-95"
            onClick={() => setCount((c) => c - 1)}
            aria-label="decrement"
          >
            –
          </button>

          <span class="inline-flex h-12 w-24 items-center justify-center rounded-xl bg-gray-100 text-2xl font-bold">
            {count}
          </span>

          <button
            class="px-3 py-2 rounded-xl bg-black text-white hover:opacity-90 active:scale-95"
            onClick={() => setCount((c) => c + 1)}
            aria-label="increment"
          >
            +
          </button>
        </div>

        <button
          class="mt-4 text-sm underline underline-offset-4"
          onClick={() => setCount(0)}
        >
          reset
        </button>
      </div>
    </div>
  )
}
