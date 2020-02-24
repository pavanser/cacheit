import { IStoreItem } from 'interfaces';
import { Actions, Statuses } from 'enums';

/**
 * Interface for non-void store methods which make changes in current store instance.
 *
 * @interface
 */
interface IResult {
  status: Statuses
  action: Actions
  items: IStoreItem[]
}

export default IResult;