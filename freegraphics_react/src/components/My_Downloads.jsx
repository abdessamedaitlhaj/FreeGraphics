
const My_Downloads = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col">
        <div>
          <table className="w-full border-spacing-8">
            <thead>
              <tr className="text-left">
                <th className="p-3 text-sm">Details</th>
                <th className="p-3 text-sm">Download date</th>
                <th className="p-3 text-sm">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-primary">
                <td className="p-4">
                  <div className="flex">
                    <a>
                      <img
                        src="./assests/image1.webp"
                        alt="img1"
                        className="w-40 rounded-lg"
                      />
                    </a>
                    <div className="hidden md:flex flex-col p-4">
                      <a>
                        <span>This is a title</span>{" "}
                      </a>
                      <a>
                        <span>by @FreeGraphics</span>
                      </a>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span>28 Jan 2024</span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-4">
                    <button className="p-1 w-1/2 text-sm md:text-md border-2 border-secondary rounded-lg">
                      <i className="ri-file-3-line"></i>
                      <a className="hidden md:inline"> Download license</a>
                    </button>
                    <button className="p-1 w-1/2 text-sm md:text-md bg-tertiary rounded-lg text-white">
                      <i className="ri-download-2-line text-sm md:text-md"></i>
                      <a href="" className="hidden md:inline">
                        Download
                      </a>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <div className="flex">
                    <a>
                      <img
                        src="./assests/image1.webp"
                        alt="img1"
                        className="w-40 rounded-lg"
                      />
                    </a>
                    <div className="hidden md:flex flex-col p-4">
                      <a>
                        <span>This is a title</span>{" "}
                      </a>
                      <a>
                        <span>by @FreeGraphics</span>
                      </a>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span>28 Jan 2024</span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-4">
                    <button className="p-1 w-1/2 text-sm md:text-md border-2 border-secondary rounded-lg">
                      <i className="ri-file-3-line"></i>
                      <a className="hidden md:inline"> Download license</a>
                    </button>
                    <button className="p-1 w-1/2 text-sm md:text-md bg-tertiary rounded-lg text-white">
                      <i className="ri-download-2-line text-sm md:text-md"></i>
                      <a href="" className="hidden md:inline">
                        Download
                      </a>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex space-x-8 justify-center">
            <div>
              <button className="p-2 w-full text-sm md:text-md border-2 border-secondary rounded-lg text-white">
                <i className="ri-arrow-left-line text-secondary text-md md:text-lg"></i>
              </button>
            </div>
            <div>
              <button className="p-2 w-full text-sm md:text-md border-2 border-secondary rounded-lg text-white">
                <i className="ri-arrow-right-line text-secondary text-md md:text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default My_Downloads;
