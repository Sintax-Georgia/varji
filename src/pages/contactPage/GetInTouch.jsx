import styles from "./GetInTouch.module.css";
import { useForm } from "react-hook-form";

function GetInTouch() {
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
      <div className={styles.formContainer}>
        <div className={styles.inputWithLabel}>
          <label htmlFor="name" className={styles.inputLabel}>
            სახელი
          </label>
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
        <div className={styles.inputWithLabel}>
          <label htmlFor="email" className={styles.inputLabel}>
            ელ-ფოსტა
          </label>
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
        <div className={styles.textAreaWithLabel}>
          <label htmlFor="text" className={styles.inputLabel}>
            შეტყობინება
          </label>
          <textarea
            type="text"
            id="text"
            placeholder="Text message"
            className={`${styles.textArea} ${styles.input}`}
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>გაგზავნა</button>
      </div>
    </form>
  );
}

export default GetInTouch;
