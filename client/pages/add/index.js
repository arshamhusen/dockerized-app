
export default function index() {
    return (
      <div className="flex justify-center items-center h-screen bf-white">
      <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
  
          <div className="mb-4">
              <p className="text-gray-400">Add Employee</p>
              <h2 className="text-xl font-bold text-white">Docker test Server</h2>
          </div>
          <div>
              <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Name"/>
          </div>
          <div>
              <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Employee Id"/>
          </div>
          <div>
              <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Phone"/>
          </div>
          <div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Add Employee</button>
          </div>
      </div>
  </div>
    )
  }
  