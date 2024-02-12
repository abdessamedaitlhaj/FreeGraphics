import quality from "../assets/svg_quality.svg";

const Edit_Infos = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col md:flex-row items-center md:place-items-start space-y-10 mt-10 space-x-8 w-full">
        <div className="flex flex-col items-center space-y-4 w-1/3 border-2 border-secondary border-opacity-20 rounded-md h-1/4 p-4">
          <img src={quality} alt="logo" width="100" />
          <span>email address</span>
        </div>
        <div className="w-full">
          <strong className="text-2xl">Account Data :</strong>
          <div className="flex flex-col mt-10 space-y-4">
            <label className="text-sm">Username :</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="border-2 border-secondary p-2 rounded-lg"
            />
            <label className="text-sm">Email :</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="border-2 border-secondary p-2 rounded-lg"
            />
            <label className="text-sm">New Password :</label>
            <input
              type="text"
              name="new password"
              placeholder="password"
              className="border-2 border-secondary p-2 rounded-lg"
            />
            <label className="text-sm">Confirm Password :</label>
            <input
              type="text"
              name="confirm_password"
              placeholder="confirm password"
              className="border-2 border-secondary p-2 rounded-lg"
            />
            <div className="flex space-x-4 self-end">
              <button className="bg-secondary text-white rounded-lg p-2">
                Cancel
              </button>
              <button className="bg-tertiary text-white rounded-lg p-2">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Edit_Infos;
