


export async function GET(request: Request) {
    const data = request.body
    const user = await prisma.user.findFirst({
        where: { name: data },
      })
}