export default {
  async fetch() {
    return new Response(
      JSON.stringify({ ok: true, message: "Worker funcionando" }),
      {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
};
