import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div class="flex bg-[#010409] h-screen items-center justify-center px-14">
    <div class="bg-red-200 w-full h-60 border-black rounded-md m:w-1/2 lg:w-1/4 flex-none relative border-2 shadow ">
        <div class="flex flex-col justify-between absolute p-4 top-0 w-full h-full">
            <div class="flex justify-between">
                <h1 class="text-lg text "> Ready to start learning? </h1>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
                    <path fill-rule="evenodd" fill="#fff" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                </svg>
            </div>
            <p class="w-3/9 text-black text-ls text-center leading-6">
                        Learning your multiplication table
            </p>
            <button class="border-[#a1a11e] border p-1 rounded-md text-black bg-white hover:opacity-80 transition w-full text-center">
                Get started
            </button>
        </div>
    </div>
</div>
  
    );
  }
export default App;