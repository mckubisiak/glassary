import { Instance, SnapshotOut, types } from "mobx-state-tree"
const videoData = require('../services/api/tempApi.json')


export const videoModel =types.array(
  types.model({title: types.string,
  id: types.string})
    
)
/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  videos: videoModel
,
}).actions(self => ({ afterCreate() { self.videos = videoData } }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
