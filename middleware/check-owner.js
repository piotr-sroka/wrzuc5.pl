export default function(context) {
    context.store.dispatch("checkOwner", context.req);
}