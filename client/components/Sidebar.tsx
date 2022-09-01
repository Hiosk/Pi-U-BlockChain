import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { TwitterContext } from '../context/TwitterContext'

interface SidebarProps {
  initialSelectedIcon: string
}

function Sidebar({ initialSelectedIcon }: SidebarProps) {
  const [selected, setSelected] = useState<String>(initialSelectedIcon)
  const { currentAccount, currentUser } = useContext(TwitterContext)
  const router = useRouter()

  return (
    <div className="flex flex-col justify-between h-screen border-r">
      <div className="px-4">
        <nav className="flex flex-col space-y-1">
          <a
            href=""
            className="flex items-center px-4 py-2 text-gray-700 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span className="ml-3 text-md font-medium">Home</span>
          </a>

          <details className="group">
            <summary
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <span className="ml-3 text-md font-medium">Messages</span>
              <span
                className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <nav className="mt-1.5 ml-8 flex flex-col">
              <a
                href=""
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium">John Kayne</span>
              </a>

              <a
                href=""
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium">Michel Kayle</span>
              </a>
              <a
                href=""
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium">Martin Wahl</span>
              </a>

              <a
                href=""
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium">Rachel Fogel</span>
              </a>
            </nav>
          </details>

          <a
            href=""
            className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>

            <span className="ml-3 text-md font-medium">Moments</span>
          </a>
          <a href="" className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="ml-3 text-md font-medium">Settings</span>
          </a>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a href="" className="flex items-center p-4 hover:bg-gray-50 shrink-0">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://www.hyperui.dev/photos/man-4.jpeg"
            alt="Simon Lewis"
          />

          <div className="ml-1.5">
            <p className="text-xs">
              <strong className="block font-medium">{currentUser.name}</strong>
              <span>@{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}</span>
            </p>
          </div>
        </a>
      </div>
    </div>

  )
}

export default Sidebar
