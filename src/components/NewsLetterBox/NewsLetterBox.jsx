import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    };


    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subcribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor sit amet.
            </p>
            <form

                onChange={onSubmitHandler}
                className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border rounded-lg overflow-hidden"

            >
                <input

                    className="w-full sm:flex-1 px-3 py-2 outline-none text-sm"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <button
                    type="submit"
                    className="bg-black hover:bg-gray-800 transition text-white text-xs font-medium px-6 py-3"
                >
                    SUBSCRIBE
                </button>
            </form>

        </div>
    )
}

export default NewsLetterBox
