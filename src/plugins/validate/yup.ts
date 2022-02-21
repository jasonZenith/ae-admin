import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "${label}必须输入",
  },
  string: {
    email: "邮箱格式错误",
  },
  number: {
    min: "${label}不能少于 ${min}位",
  },
});

export default yup;
