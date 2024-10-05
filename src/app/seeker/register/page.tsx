import React from 'react';
import "@public/assets/css/style.css"
import Link from 'next/link';

const page = () => {
    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth">
                        <div className="row flex-grow">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left p-5">
                                    <div className="brand-logo">
                                        <img src="/assets/images/logo.svg" />
                                    </div>
                                    <h4>New here?</h4>
                                    <h6 className="font-weight-light">
                                        Signing up is easy. It only takes a few steps
                                    </h6>
                                    <form className="pt-3">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                id="exampleInputUsername1"
                                                placeholder="Username"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                id="exampleInputEmail1"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <select
                                                className="form-select form-select-lg"
                                                id="exampleFormControlSelect2"
                                            >
                                                <option>Country</option>
                                                <option>United States of America</option>
                                                <option>United Kingdom</option>
                                                <option>India</option>
                                                <option>Germany</option>
                                                <option>Argentina</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control form-control-lg"
                                                id="exampleInputPassword1"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <div className="form-check">
                                                <label className="form-check-label text-muted">
                                                    <input type="checkbox" className="form-check-input" /> I
                                                    agree to all Terms &amp; Conditions{" "}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mt-3 d-grid gap-2">
                                            <a
                                                className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                                                href="../../index.html"
                                            >
                                                SIGN UP
                                            </a>
                                        </div>
                                        <div className="text-center mt-4 font-weight-light">
                                            {" "}
                                            Already have an account?{" "}
                                            <Link href="/seeker/login" className="text-primary">
                                                Login
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* content-wrapper ends */}
                </div>
                {/* page-body-wrapper ends */}
            </div>

        </>
    )
}

export default page