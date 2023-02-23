function App() {
    return (
        <div className="h-screen bg-very-dark-blue-mbg">
            <div className=" flex h-[100%] items-center justify-center">
                <div >
                    <div className="m-auto w-[85%] rounded-2xl bg-very-dark-blue-cbg p-3">
                        <button className='p-4'>
                            <div className="hover:bg-cyan-trans hover:z-40">
                                <div className="hover:z-10">
                                    <img
                                        src="./images/image-equilibrium.jpg"
                                        alt="cube-image"
                                        className="rounded-xl"
                                    />
                                </div>
                            </div>
                        </button>
                        <article className="p-4">
                            <button className="mb-4 text-2xl text-white hover:text-cyan">
                                Equilibrium #3429
                            </button>
                            <p className="mb-4 text-lg text-soft-blue font-light">
                                Our Equilibrium collection promotes balance and
                                calm.
                            </p>
                            <section className="mb-3 flex justify-between items-center">
                                <div className="flex font-semibold gap-2 items-center">
                                    <img
                                        src="./images/icon-ethereum.svg"
                                        alt="Ethereum Icon"
                                        className="w-3 h-5"
                                    />
                                    <h5 className="text-cyan">0.041 ETH</h5>
                                </div>
                                <div className="flex font-normal gap-2 items-center">
                                    <img
                                        src="./images/icon-clock.svg"
                                        alt="Ethereum Icon"
                                        className="w-5 h-5"
                                    />
                                    <h5 className="text-soft-blue font-light">3 days left</h5>
                                </div>
                            </section>
                        </article>
                        <footer className="flex items-center gap-3 p-4 border-t border-very-dark-blue-l ">
                            <div className="border rounded-full flex flex-none w-10 h-10">
                                <img
                                    src="./images/image-avatar.png"
                                    alt="avatar image"
                                    className=""
                                />
                            </div>
                            <p className="text-soft-blue font-light">
                                Creation of <button className="text-white hover:text-cyan">Jules Wyvern</button>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
