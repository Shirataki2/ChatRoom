export default function({ ssrContext, redirect }) {
  if (ssrContext) {
    redirect("/");
  }
}
