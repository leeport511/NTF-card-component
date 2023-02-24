function App() {
    return (
        <div className="flex h-screen items-center justify-center bg-very-dark-blue-mbg">
            <div className="md:drop-shadow-2xl">
                <div className="m-auto w-[85%] rounded-2xl bg-very-dark-blue-cbg p-3 md:w-[55%] md:drop-shadow-2xl">
                    <button className="p-4 relative img-btn  ">
                        <div className="relative">
                            <div className="hover:z-40  absolute w-[100%] h-[100%] hover:bg-cyan-trans rounded-xl flex ">
                                <img src="./images/icon-view.svg" alt="eye of agamoto" className="w-[40%] m-auto eye-icon hover:duration-600"/>
                            </div>
                            <div>
                                <img
                                    src="./images/image-equilibrium.jpg"
                                    alt="cube-image"
                                    className="rounded-xl z-0 "
                                />
                            </div>
                        </div>
                    </button>
                    <article className="p-4">
                        <button className="mb-4 text-2xl text-white hover:text-cyan">
                            Equilibrium #3429
                        </button>
                        <p className="mb-4 text-lg font-light text-soft-blue">
                            Our Equilibrium collection promotes balance and
                            calm.
                        </p>
                        <section className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2 font-semibold">
                                <img
                                    src="./images/icon-ethereum.svg"
                                    alt="Ethereum Icon"
                                    className="h-5 w-3"
                                />
                                <h5 className="text-cyan">0.041 ETH</h5>
                            </div>
                            <div className="flex items-center gap-2 font-normal">
                                <img
                                    src="./images/icon-clock.svg"
                                    alt="Ethereum Icon"
                                    className="h-5 w-5"
                                />
                                <h5 className="font-light text-soft-blue">
                                    3 days left
                                </h5>
                            </div>
                        </section>
                    </article>
                    <footer className="flex items-center gap-3 border-t border-very-dark-blue-l p-4 ">
                        <div className="flex h-10 w-10 flex-none rounded-full border">
                            <img
                                src="./images/image-avatar.png"
                                alt="avatar image"
                                className=""
                            />
                        </div>
                        <p className="font-light text-soft-blue">
                            Creation of{" "}
                            <button className="text-white hover:text-cyan">
                                Jules Wyvern
                            </button>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;
