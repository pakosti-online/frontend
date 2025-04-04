import React from "react";

const Login = () => {
  return (
    <div className="card card-md">
      <div className="card-body">
        <h2 className="h2 text-center mb-4">Авторизация</h2>
        <form action="./" method="get">
          <div className="mb-3">
            <label className="form-label">Адрес электронной почты</label>
            <input
              type="email"
              className="form-control"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-2">
            <label className="form-label">
              Пароль
              <span className="form-label-description">
                <a href="./forgot-password.html">Забыл пароль</a>
              </span>
            </label>
            <div className="input-group input-group-flat">
              <input
                type="password"
                className="form-control"
                placeholder="Your password"
              />
              <span className="input-group-text">
                <a
                  href="#"
                  className="link-secondary"
                  data-bs-toggle="tooltip"
                  aria-label="Show password"
                  data-bs-original-title="Show password"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="mb-2">
            <label className="form-check">
              <input type="checkbox" className="form-check-input" />
              <span className="form-check-label">Запомнить меня</span>
            </label>
          </div>
          <div className="form-footer">
            <button type="submit" className="btn btn-primary w-100">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
