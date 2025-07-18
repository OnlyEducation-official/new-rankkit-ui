'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  organizationName?: string;
  message: string;
  links?: string;
  number: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("subject"),
  organizationName: yup.string().optional(),
  message: yup.string().required().label("Message"),
  links: yup.string().optional(),
  number: yup
  .string()
  .required("Phone number is required")
  .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
  .label("Phone Number")
});

// prop type
type IProps = {
  btnCls?: string;
};
export default function ContactForm({ btnCls = "" }: IProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  console.log('errors', errors);
  const onSubmit = async (data: FormData) => {
    // alert(JSON.stringify(data));
    const res = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  const result = await res.json();
  console.log('result', result);
  if (result.success) {
    alert("Email sent!");
  } else {
    alert("Failed to send email");
  }
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="cn-contactform-input mb-25">
        <label>Name</label>
        <input
          id="name"
          {...register("name")}
          type="text"
          placeholder="John Doe"
        />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Orgainzation Name</label>
        <input
          id="orgainzation-name"
          {...register("organizationName")}
          type="text"
          placeholder="Your Company Name"
        />
        {/* <ErrorMsg msg={errors.organizationName?.message!} /> */}
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Email</label>
        <input
          id="subject"
          {...register("subject")}
          type="text"
          placeholder="Your@email.com"
        />
        <ErrorMsg msg={errors.subject?.message!} />
      </div>

      <div className="cn-contactform-input mb-25">
        <label>Website/Social Media Link</label>
        <input
          id="links"
          {...register("links")}
          type="text"
          placeholder="Website or Social Link"
        />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Phone</label>
        <input
          id="number"
          {...register("number")}
          type="number"
          placeholder="Phone number"
        />
        <ErrorMsg msg={errors.number?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Message</label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Tell Us About Your Project"
        ></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
}
