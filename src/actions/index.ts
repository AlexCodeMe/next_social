'use server'

export async function switchFollow(userId: string) {}

export async function switchBlock(userId: string) {}

export async function acceptFollowRequest(userId: string) {}

export async function declineFollowRequest(userId: string) {}

export async function updateProfile(
    prevState: { success: boolean, error: boolean },
    payload: { formData: FormData; cover: string }
) {}

export async function switchLike(postId: number) {}

export async function addComment(
    postId: number,
    desc: string
) {}

export async function addPost(
    formData: FormData, 
    img: string
) {}

export async function addStory(img: string) {}

export async function deletePost(postId: number) {}