'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  organizationName: string;
  message: string;
  links: string;
  number: number;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("subject"),
  organizationName: yup.string().required().label("Organization Name"),
  message: yup.string().required().label("Message"),
  links: yup.string().required().label("Website/Social Media Link"),
  number: yup.number().required().max(10).min(10).label("Number"),
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
  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });
  return (
    <form onSubmit={onSubmit}>
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
        <ErrorMsg msg={errors.organizationName?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Subject</label>
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
        <ErrorMsg msg={errors.links?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Phone</label>
        <input
          id="number"
          {...register("number")}
          type="text"
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
