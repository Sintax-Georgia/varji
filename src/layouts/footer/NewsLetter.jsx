import styles from "./Footer.module.css";
import { useForm } from "react-hook-form";

function NewsLetter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
    reset();
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.inputLabel}>
          Get a quote
        </label>
        <div className={styles.errorMsgContainer}>
          <input
            name="name"
            {...register("name", {
              maxLength: { value: 20, message: "Max characters 20" },
            })}
            className={styles.input}
            type="text"
            autoComplete="given_name"
            id="name"
            placeholder="Name"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p className={styles.errorMsg}>{errors.name.message}</p>
          )}
        </div>
        <div className={styles.errorMshContainer}>
          <input
            name="phone"
            {...register("phone", {
              pattern: {
                value: /^5\d{2}\d{6}$/,
                message: "Incorrect phone number",
              },
            })}
            className={styles.input}
            type="text"
            autoComplete="tel"
            id="phone"
            placeholder="Phone"
          />
          {errors.phone && (
            <p className={styles.errorMsg}>{errors.phone.message}</p>
          )}
        </div>
        <div className={styles.errorMshContainer}>
          <input
            name="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Incorrect E-mail",
              },
            })}
            className={styles.input}
            type="text"
            autoComplete="email"
            id="email"
            placeholder="E-mail"
          />
          {errors.email && (
            <p className={styles.errorMsg}>{errors.email.message}</p>
          )}
        </div>
        <button className={styles.button}>SEND</button>
      </div>
    </form>
  );
}

export default NewsLetter;
