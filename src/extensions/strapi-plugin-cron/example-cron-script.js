module.exports = async ({ strapi, cronJob }) => {
  console.log('Hello World!')
  console.log(
    `${cronJob.name} – ${cronJob.iterationsCount} / ${cronJob.iterationsLimit}`
  )
}
