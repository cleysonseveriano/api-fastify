import { randomUUID } from "crypto"

export class DataBaseMemory {
    #videos = new Map()

    list ( search ) {
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const id = videoArray[0]
                const data = videoArray[1]

                return {
                    id,
                    ...data
                }
        })
        .filter(video => {
            if( search ) {
                return video.title.includes(search)
            }
            
            return true
        })
    }
    
    create ( video ) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }
    // ATUALIZAR
    update ( id, video ) {
        this.#videos.set(id, video)
    }
    // DELETAR
    delete ( id ) {
        this.#videos.delete( id )
    }
}

// SET
// MAP => Looks like an object
// UUID - Unique universe id