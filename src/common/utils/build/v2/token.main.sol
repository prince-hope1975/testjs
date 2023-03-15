// Automatically generated with Reach 0.1.13 (88e48902)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  uint256 _Some;
  }
enum _enum_T1 {None, Some}
struct T1 {
  _enum_T1 which;
  bool _None;
  bool _Some;
  }
struct T2 {
  address payable elem0;
  }
struct T3 {
  uint256 elem0;
  }
struct T4 {
  address payable elem0;
  uint256 elem1;
  }
enum _enum_T6 {Admin_addAdmin0_130, Admin_deposit0_130, Admin_editUserReward0_130, Admin_endContractAndTransfer0_130, Admin_revokeAdmin0_130, Admin_setReward0_130, User_claim0_130, User_claimAll0_130, User_optin0_130}
struct T6 {
  _enum_T6 which;
  T2 _Admin_addAdmin0_130;
  T3 _Admin_deposit0_130;
  T4 _Admin_editUserReward0_130;
  bool _Admin_endContractAndTransfer0_130;
  T2 _Admin_revokeAdmin0_130;
  T4 _Admin_setReward0_130;
  T3 _User_claim0_130;
  bool _User_claimAll0_130;
  bool _User_optin0_130;
  }
struct T7 {
  uint256 elem0;
  T6 elem1;
  }
struct T8 {
  uint256 _i;
  uint256 _scale;
  }
struct T9 {
  T8 _i;
  bool _sign;
  }
struct T10 {
  uint256 _bal;
  bool _keepGoing;
  T9 _percent;
  uint256 _total_amount_claimed;
  uint256 _total_rewards_allcoated;
  uint256 _total_users_claim;
  uint256 _usersNo;
  }
struct T11 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T13 {
  address payable v2359;
  bytes30 v2360;
  address payable v2361;
  T10 v2373;
  T11[1] v2376;
  uint256 v2377;
  uint256 v2408;
  uint256 v2409;
  uint256 v2410;
  uint256 v2411;
  uint256 v2412;
  T11 v2413;
  uint256 v2414;
  }
struct T14 {
  uint256 elem0;
  bytes30 elem1;
  address payable elem2;
  }
struct T15 {
  address payable elem0;
  bytes30 elem1;
  address payable elem2;
  T10 elem3;
  uint256 elem4;
  T11[1] elem5;
  uint256 elem6;
  }
struct T16 {
  address payable addr;
  uint256 amount;
  bytes30 projectName;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  function array_set12(T11[1] memory arr, uint256 idx, T11 memory val) internal  returns (T11[1] memory arrp) {
    for (uint256 i = 0; i < 1; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T14 _a);
  event _reach_e2(address _who, T7 _a);
  event _reach_oe_v2870(bool v0);
  event _reach_oe_v3422(bool v0);
  event _reach_oe_v3981(bool v0);
  event _reach_oe_v4528(bool v0);
  event _reach_oe_v5076(bool v0);
  event _reach_oe_v5635(bool v0);
  event _reach_oe_v6239(bool v0);
  event _reach_oe_v6842(bool v0);
  event _reach_oe_v6862(bool v0);
  event _reach_oe_v6892(bool v0);
  event _reach_oe_v7448(bool v0);
  event claimed(T16 v0);
  event insufficient(uint256 v0);
  receive () external payable {}
  fallback () external payable {}
  mapping (address => T0) _reachm_0;
  function __reachm_0Ref(address addr) internal view returns (T0 memory res) {
    if (_reachm_0[addr].which == _enum_T0.Some) {
      res = _reachm_0[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_0Ref(address addr) external view returns (T0 memory res) {
    res = __reachm_0Ref(addr);
    }
  mapping (address => T1) _reachm_1;
  function __reachm_1Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_1[addr].which == _enum_T1.Some) {
      res = _reachm_1[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_1Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_1Ref(addr);
    }
  mapping (address => T1) _reachm_2;
  function __reachm_2Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_2[addr].which == _enum_T1.Some) {
      res = _reachm_2[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_2Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_2Ref(addr);
    }
  mapping (address => T1) _reachm_3;
  function __reachm_3Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_3[addr].which == _enum_T1.Some) {
      res = _reachm_3[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_3Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_3Ref(addr);
    }
  struct Memory {
    bool nil;
    bool _reachr_Admin_addAdmin;
    bool _reachr_Admin_deposit;
    bool _reachr_Admin_editUserReward;
    bool _reachr_Admin_endContractAndTransfer;
    bool _reachr_Admin_revokeAdmin;
    bool _reachr_Admin_setReward;
    bool _reachr_Info_Admins;
    uint256 _reachr_Info_balance;
    bool _reachr_Info_opted;
    uint256 _reachr_Info_rewards;
    uint256 _reachr_Info_totalAllocatedFunds;
    uint256 _reachr_Info_totalAmountClaimed;
    uint256 _reachr_Info_totalClaimed;
    uint256 _reachr_Info_totalOptedIn;
    bool _reachr_User_claim;
    bool _reachr_User_claimAll;
    bool _reachr_User_optin;
    }
  struct _F12288 {
    T2 v12232;
    T6 v12233;
    }
  function _reacha_Admin_addAdmin(address payable _a, Memory memory _Memory) internal  {
    _F12288 memory _f;
    _f.v12232.elem0 = _a;
    _f.v12233.which = _enum_T6.Admin_addAdmin0_130;
    _f.v12233._Admin_addAdmin0_130 = _f.v12232;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12233;
    _reachi_2(_ja, _Memory);
    }
  struct _F12289 {
    T3 v12238;
    T6 v12239;
    }
  function _reacha_Admin_deposit(uint256 _a, Memory memory _Memory) internal  {
    _F12289 memory _f;
    _f.v12238.elem0 = _a;
    _f.v12239.which = _enum_T6.Admin_deposit0_130;
    _f.v12239._Admin_deposit0_130 = _f.v12238;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12239;
    _reachi_2(_ja, _Memory);
    }
  struct _F12290 {
    T4 v12245;
    T6 v12246;
    }
  function _reacha_Admin_editUserReward(T4 memory _a, Memory memory _Memory) internal  {
    _F12290 memory _f;
    _f.v12245.elem0 = _a.elem0;
    _f.v12245.elem1 = _a.elem1;
    _f.v12246.which = _enum_T6.Admin_editUserReward0_130;
    _f.v12246._Admin_editUserReward0_130 = _f.v12245;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12246;
    _reachi_2(_ja, _Memory);
    }
  struct _F12291 {
    bool v12251;
    T6 v12252;
    }
  function _reacha_Admin_endContractAndTransfer(bool _a, Memory memory _Memory) internal  {
    _F12291 memory _f;
    _f.v12252.which = _enum_T6.Admin_endContractAndTransfer0_130;
    _f.v12252._Admin_endContractAndTransfer0_130 = _f.v12251;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12252;
    _reachi_2(_ja, _Memory);
    }
  struct _F12292 {
    T2 v12256;
    T6 v12257;
    }
  function _reacha_Admin_revokeAdmin(address payable _a, Memory memory _Memory) internal  {
    _F12292 memory _f;
    _f.v12256.elem0 = _a;
    _f.v12257.which = _enum_T6.Admin_revokeAdmin0_130;
    _f.v12257._Admin_revokeAdmin0_130 = _f.v12256;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12257;
    _reachi_2(_ja, _Memory);
    }
  struct _F12293 {
    T4 v12263;
    T6 v12264;
    }
  function _reacha_Admin_setReward(T4 memory _a, Memory memory _Memory) internal  {
    _F12293 memory _f;
    _f.v12263.elem0 = _a.elem0;
    _f.v12263.elem1 = _a.elem1;
    _f.v12264.which = _enum_T6.Admin_setReward0_130;
    _f.v12264._Admin_setReward0_130 = _f.v12263;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12264;
    _reachi_2(_ja, _Memory);
    }
  function _reacha_Info_Admins(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(7) /*'(./token.rsh:37:11:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    _Memory._reachr_Info_Admins = ((uint256((__reachm_1Ref((_a))).which)) == uint256(1));
    }
  function _reacha_Info_balance(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(8) /*'(./token.rsh:43:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    _Memory._reachr_Info_balance = _svs.v2414;
    }
  function _reacha_Info_opted(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(9) /*'(./token.rsh:38:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    _Memory._reachr_Info_opted = ((uint256((__reachm_3Ref((_a))).which)) == uint256(1));
    }
  function _reacha_Info_rewards(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(10) /*'(./token.rsh:36:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    _Memory._reachr_Info_rewards = (((__reachm_0Ref((_a))).which == _enum_T0.Some ? (__reachm_0Ref((_a)))._Some : uint256(0)));
    }
  function _reacha_Info_totalAllocatedFunds(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(11) /*'(./token.rsh:42:24:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    _Memory._reachr_Info_totalAllocatedFunds = _svs.v2412;
    }
  function _reacha_Info_totalAmountClaimed(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(12) /*'(./token.rsh:41:23:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    _Memory._reachr_Info_totalAmountClaimed = _svs.v2409;
    }
  function _reacha_Info_totalClaimed(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(13) /*'(./token.rsh:39:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    _Memory._reachr_Info_totalClaimed = _svs.v2408;
    }
  function _reacha_Info_totalOptedIn(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(14) /*'(./token.rsh:40:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    _Memory._reachr_Info_totalOptedIn = _svs.v2410;
    }
  struct _F12302 {
    T3 v12270;
    T6 v12271;
    }
  function _reacha_User_claim(uint256 _a, Memory memory _Memory) internal  {
    _F12302 memory _f;
    _f.v12270.elem0 = _a;
    _f.v12271.which = _enum_T6.User_claim0_130;
    _f.v12271._User_claim0_130 = _f.v12270;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12271;
    _reachi_2(_ja, _Memory);
    }
  struct _F12303 {
    bool v12275;
    T6 v12276;
    }
  function _reacha_User_claimAll(bool _a, Memory memory _Memory) internal  {
    _F12303 memory _f;
    _f.v12276.which = _enum_T6.User_claimAll0_130;
    _f.v12276._User_claimAll0_130 = _f.v12275;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12276;
    _reachi_2(_ja, _Memory);
    }
  struct _F12304 {
    bool v12279;
    T6 v12280;
    }
  function _reacha_User_optin(bool _a, Memory memory _Memory) internal  {
    _F12304 memory _f;
    _f.v12280.which = _enum_T6.User_optin0_130;
    _f.v12280._User_optin0_130 = _f.v12279;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12280;
    _reachi_2(_ja, _Memory);
    }
  struct _F12305 {
    T11 v2350;
    T11[1] v2351;
    T8 v2370;
    T9 v2371;
    T10 v2372;
    }
  function _reachi_0(T14 memory _a, Memory memory _Memory) internal  {
    _F12305 memory _f;
    reachRequire((! locked), uint256(15) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(16) /*'time check at ./token.rsh:57:12:dot'*/);
    _f.v2350.elem0 = uint256(0);
    _f.v2350.elem1 = uint256(0);
    _f.v2350.elem2 = false;
    _f.v2351[0] = _f.v2350;
    
    reachRequire((msg.value == uint256(0)), uint256(17) /*'(./token.rsh:57:12:dot,[],"verify network token pay amount")'*/);
    _f.v2370._i = uint256(5);
    _f.v2370._scale = uint256(100);
    _f.v2371._i = _f.v2370;
    _f.v2371._sign = true;
    _f.v2372._bal = uint256(0);
    _f.v2372._keepGoing = true;
    _f.v2372._percent = _f.v2371;
    _f.v2372._total_amount_claimed = uint256(0);
    _f.v2372._total_rewards_allcoated = uint256(0);
    _f.v2372._total_users_claim = uint256(0);
    _f.v2372._usersNo = uint256(0);
    T15  memory _ja;
    _ja.elem0 = payable(msg.sender);
    _ja.elem1 = (_a.elem1);
    _ja.elem2 = (_a.elem2);
    _ja.elem3 = _f.v2372;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = (array_set12(_f.v2351, uint256(0), (T11({elem0: uint256(0), elem1: (_f.v2351[uint256(0)]).elem1, elem2: (_f.v2351[uint256(0)]).elem2}))));
    _ja.elem6 = uint256(0);
    _reachl_1(_ja, _Memory);
    }
  struct _F12306 {
    T2 v2720;
    T10 v2884;
    T3 v3247;
    T10 v3437;
    T4 v3774;
    T10 v3996;
    T10 v4541;
    T2 v4828;
    T10 v5090;
    T4 v5355;
    bool v5428;
    uint256 v5433;
    uint256 v5650;
    T10 v5652;
    T3 v5882;
    T16 v6246;
    T10 v6271;
    T10 v6295;
    T0 v6511;
    uint256 v6512;
    uint256 v6838;
    T10 v6856;
    T16 v6868;
    T10 v6890;
    T10 v6917;
    T10 v7461;
    }
  function _reachi_2(T7 memory _a, Memory memory _Memory) internal  {
    _F12306 memory _f;
    reachRequire((current_step == uint256(3)), uint256(18) /*'state check at ./token.rsh:70:37:dot'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    reachRequire((! locked), uint256(19) /*'locked'*/);
    emit _reach_e2(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(20) /*'time check at ./token.rsh:70:37:dot'*/);
    if ((_a.elem1).which == _enum_T6.Admin_addAdmin0_130) {
    _f.v2720 = (_a.elem1)._Admin_addAdmin0_130;
    reachRequire((((payable(msg.sender) == _svs.v2359) ? true : ((uint256((__reachm_1Ref(payable(msg.sender))).which)) == uint256(1)))), uint256(21) /*'(reach standard library:57:5:application,[at ./token.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:164:34:application call to [unknown function] (defined at: ./token.rsh:164:34:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:164:34:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "You Are unable to register another Admin")'*/);
    reachRequire((msg.value == uint256(0)), uint256(22) /*'(./token.rsh:70:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2361, uint256(0))), uint256(23) /*'(./token.rsh:70:37:dot,[],"verify non-network token pay amount")'*/);
    _reachm_1[(_f.v2720.elem0)].which = _enum_T1.Some;
    _reachm_1[(_f.v2720.elem0)]._Some = false;
    
    emit _reach_oe_v2870( (false));
    _Memory._reachr_Admin_addAdmin = (false);
    _f.v2884._bal = _svs.v2411;
    _f.v2884._keepGoing = (_svs.v2373._keepGoing);
    _f.v2884._percent = (_svs.v2373._percent);
    _f.v2884._total_amount_claimed = _svs.v2409;
    _f.v2884._total_rewards_allcoated = _svs.v2412;
    _f.v2884._total_users_claim = _svs.v2408;
    _f.v2884._usersNo = _svs.v2410;
    T15  memory _ja;
    _ja.elem0 = _svs.v2359;
    _ja.elem1 = _svs.v2360;
    _ja.elem2 = _svs.v2361;
    _ja.elem3 = _f.v2884;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = _svs.v2376;
    _ja.elem6 = _svs.v2377;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Admin_deposit0_130) {
    _f.v3247 = (_a.elem1)._Admin_deposit0_130;
    reachRequire((((payable(msg.sender) == _svs.v2359) ? true : ((uint256((__reachm_1Ref(payable(msg.sender))).which)) == uint256(1)))), uint256(24) /*'(reach standard library:57:5:application,[at ./token.rsh:101:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:100:32:application call to [unknown function] (defined at: ./token.rsh:100:32:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:100:32:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "Only Admins can deposit")'*/);
    reachRequire((msg.value == uint256(0)), uint256(25) /*'(./token.rsh:70:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2361, (_f.v3247.elem0))), uint256(26) /*'(./token.rsh:70:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v3422( (false));
    _Memory._reachr_Admin_deposit = (false);
    _f.v3437._bal = (safeAdd(_svs.v2411, (_f.v3247.elem0)));
    _f.v3437._keepGoing = (_svs.v2373._keepGoing);
    _f.v3437._percent = (_svs.v2373._percent);
    _f.v3437._total_amount_claimed = _svs.v2409;
    _f.v3437._total_rewards_allcoated = _svs.v2412;
    _f.v3437._total_users_claim = _svs.v2408;
    _f.v3437._usersNo = _svs.v2410;
    T15  memory _ja;
    _ja.elem0 = _svs.v2359;
    _ja.elem1 = _svs.v2360;
    _ja.elem2 = _svs.v2361;
    _ja.elem3 = _f.v3437;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = (array_set12(_svs.v2376, uint256(0), (T11({elem0: (unsafeAdd(_svs.v2414, (_f.v3247.elem0))), elem1: _svs.v2413.elem1, elem2: _svs.v2413.elem2}))));
    _ja.elem6 = _svs.v2377;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Admin_editUserReward0_130) {
    _f.v3774 = (_a.elem1)._Admin_editUserReward0_130;
    reachRequire((((payable(msg.sender) == _svs.v2359) ? true : ((uint256((__reachm_1Ref(payable(msg.sender))).which)) == uint256(1)))), uint256(27) /*'(reach standard library:57:5:application,[at ./token.rsh:152:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:151:45:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "Only Admins can deposit")'*/);
    reachRequire((((_f.v3774.elem1) <= _svs.v2414)), uint256(28) /*'(reach standard library:57:5:application,[at ./token.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:151:45:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "Can only edit what is in the contract")'*/);
    reachRequire((msg.value == uint256(0)), uint256(29) /*'(./token.rsh:70:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2361, uint256(0))), uint256(30) /*'(./token.rsh:70:37:dot,[],"verify non-network token pay amount")'*/);
    _reachm_0[(_f.v3774.elem0)].which = _enum_T0.Some;
    _reachm_0[(_f.v3774.elem0)]._Some = (_f.v3774.elem1);
    
    emit _reach_oe_v3981( (false));
    _Memory._reachr_Admin_editUserReward = (false);
    _f.v3996._bal = _svs.v2411;
    _f.v3996._keepGoing = (_svs.v2373._keepGoing);
    _f.v3996._percent = (_svs.v2373._percent);
    _f.v3996._total_amount_claimed = _svs.v2409;
    _f.v3996._total_rewards_allcoated = _svs.v2412;
    _f.v3996._total_users_claim = _svs.v2408;
    _f.v3996._usersNo = _svs.v2410;
    T15  memory _ja;
    _ja.elem0 = _svs.v2359;
    _ja.elem1 = _svs.v2360;
    _ja.elem2 = _svs.v2361;
    _ja.elem3 = _f.v3996;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = _svs.v2376;
    _ja.elem6 = _svs.v2377;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Admin_endContractAndTransfer0_130) {
    reachRequire(((_svs.v2359 == payable(msg.sender))), uint256(31) /*'(reach standard library:57:5:application,[at ./token.rsh:281:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:280:44:application call to [unknown function] (defined at: ./token.rsh:280:44:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:280:44:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "Cannot end contract without being Deployer")'*/);
    reachRequire((msg.value == uint256(0)), uint256(32) /*'(./token.rsh:70:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2361, uint256(0))), uint256(33) /*'(./token.rsh:70:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v4528( (false));
    _Memory._reachr_Admin_endContractAndTransfer = (false);
    _f.v4541._bal = _svs.v2411;
    _f.v4541._keepGoing = false;
    _f.v4541._percent = (_svs.v2373._percent);
    _f.v4541._total_amount_claimed = _svs.v2409;
    _f.v4541._total_rewards_allcoated = _svs.v2412;
    _f.v4541._total_users_claim = _svs.v2408;
    _f.v4541._usersNo = _svs.v2410;
    T15  memory _ja;
    _ja.elem0 = _svs.v2359;
    _ja.elem1 = _svs.v2360;
    _ja.elem2 = _svs.v2361;
    _ja.elem3 = _f.v4541;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = _svs.v2376;
    _ja.elem6 = _svs.v2377;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Admin_revokeAdmin0_130) {
    _f.v4828 = (_a.elem1)._Admin_revokeAdmin0_130;
    reachRequire(((payable(msg.sender) == _svs.v2359)), uint256(34) /*'(reach standard library:57:5:application,[at ./token.rsh:179:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:178:37:application call to [unknown function] (defined at: ./token.rsh:178:37:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:178:37:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "Only the Deployer can revoke Admin Rights")'*/);
    reachRequire((msg.value == uint256(0)), uint256(35) /*'(./token.rsh:70:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2361, uint256(0))), uint256(36) /*'(./token.rsh:70:37:dot,[],"verify non-network token pay amount")'*/);
    delete _reachm_1[(_f.v4828.elem0)];
    emit _reach_oe_v5076( (false));
    _Memory._reachr_Admin_revokeAdmin = (false);
    _f.v5090._bal = _svs.v2411;
    _f.v5090._keepGoing = (_svs.v2373._keepGoing);
    _f.v5090._percent = (_svs.v2373._percent);
    _f.v5090._total_amount_claimed = _svs.v2409;
    _f.v5090._total_rewards_allcoated = _svs.v2412;
    _f.v5090._total_users_claim = _svs.v2408;
    _f.v5090._usersNo = _svs.v2410;
    T15  memory _ja;
    _ja.elem0 = _svs.v2359;
    _ja.elem1 = _svs.v2360;
    _ja.elem2 = _svs.v2361;
    _ja.elem3 = _f.v5090;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = _svs.v2376;
    _ja.elem6 = _svs.v2377;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Admin_setReward0_130) {
    _f.v5355 = (_a.elem1)._Admin_setReward0_130;
    _f.v5428 = (_f.v5355.elem1) > _svs.v2411;
    reachRequire((((uint256((__reachm_3Ref((_f.v5355.elem0))).which)) == uint256(1))), uint256(37) /*'(reach standard library:57:5:application,[at ./token.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:113:40:application call to [unknown function] (defined at: ./token.rsh:113:40:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:113:40:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "The user needs to opt in first")'*/);
    _f.v5433 = _f.v5428 ? (_f.v5355.elem1) : uint256(0);
    reachRequire((msg.value == uint256(0)), uint256(38) /*'(./token.rsh:70:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2361, _f.v5433)), uint256(39) /*'(./token.rsh:70:37:dot,[],"verify non-network token pay amount")'*/);
    _reachm_0[(_f.v5355.elem0)].which = _enum_T0.Some;
    _reachm_0[(_f.v5355.elem0)]._Some = (safeAdd((((__reachm_0Ref((_f.v5355.elem0))).which == _enum_T0.Some ? (__reachm_0Ref((_f.v5355.elem0)))._Some : uint256(0))), (_f.v5355.elem1)));
    
    emit _reach_oe_v5635( (true));
    _Memory._reachr_Admin_setReward = (true);
    if (_f.v5428) {
      _f.v5650 = (safeAdd(_svs.v2411, (_f.v5355.elem1)));
      }
    else {
      _f.v5650 = _svs.v2411;
      }
    _f.v5652._bal = _f.v5650;
    _f.v5652._keepGoing = (_svs.v2373._keepGoing);
    _f.v5652._percent = (_svs.v2373._percent);
    _f.v5652._total_amount_claimed = _svs.v2409;
    _f.v5652._total_rewards_allcoated = _svs.v2412;
    _f.v5652._total_users_claim = _svs.v2408;
    _f.v5652._usersNo = _svs.v2410;
    T15  memory _ja;
    _ja.elem0 = _svs.v2359;
    _ja.elem1 = _svs.v2360;
    _ja.elem2 = _svs.v2361;
    _ja.elem3 = _f.v5652;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = (array_set12(_svs.v2376, uint256(0), (T11({elem0: (unsafeAdd(_svs.v2414, _f.v5433)), elem1: _svs.v2413.elem1, elem2: _svs.v2413.elem2}))));
    _ja.elem6 = _svs.v2377;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.User_claim0_130) {
    _f.v5882 = (_a.elem1)._User_claim0_130;
    reachRequire((((_f.v5882.elem0) <= _svs.v2414)), uint256(40) /*'(reach standard library:57:5:application,[at ./token.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:237:29:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "Cannot withdraw less than balance")'*/);
    reachRequire((((((__reachm_0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachm_0Ref(payable(msg.sender)))._Some : uint256(0))) >= (_f.v5882.elem0))), uint256(41) /*'(reach standard library:57:5:application,[at ./token.rsh:240:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:237:29:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "Cannot withdraw less than allocated")'*/);
    reachRequire((msg.value == uint256(0)), uint256(42) /*'(./token.rsh:70:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2361, uint256(0))), uint256(43) /*'(./token.rsh:70:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v6239( (true));
    _Memory._reachr_User_claim = (true);
    _f.v6246.addr = payable(msg.sender);
    _f.v6246.amount = (_f.v5882.elem0);
    _f.v6246.projectName = _svs.v2360;
    emit claimed( _f.v6246);
    if (((uint256((__reachm_2Ref(payable(msg.sender))).which)) == uint256(1))) {
      safeTokenTransfer(_svs.v2361, payable(msg.sender), (_f.v5882.elem0));
      delete _reachm_0[payable(msg.sender)];
      _f.v6295._bal = (safeSub(_svs.v2411, (_f.v5882.elem0)));
      _f.v6295._keepGoing = (_svs.v2373._keepGoing);
      _f.v6295._percent = (_svs.v2373._percent);
      _f.v6295._total_amount_claimed = (safeAdd(_svs.v2409, (_f.v5882.elem0)));
      _f.v6295._total_rewards_allcoated = _svs.v2412;
      _f.v6295._total_users_claim = (safeAdd(_svs.v2408, uint256(1)));
      _f.v6295._usersNo = (safeAdd(_svs.v2410, uint256(1)));
      T15  memory _ja;
      _ja.elem0 = _svs.v2359;
      _ja.elem1 = _svs.v2360;
      _ja.elem2 = _svs.v2361;
      _ja.elem3 = _f.v6295;
      _ja.elem4 = uint256(block.number);
      _ja.elem5 = (array_set12(_svs.v2376, uint256(0), (T11({elem0: (unsafeSub(_svs.v2414, (_f.v5882.elem0))), elem1: _svs.v2413.elem1, elem2: _svs.v2413.elem2}))));
      _ja.elem6 = _svs.v2377;
      _reachl_1(_ja, _Memory);
      }
    else {
      _reachm_2[payable(msg.sender)].which = _enum_T1.Some;
      _reachm_2[payable(msg.sender)]._Some = false;
      
      safeTokenTransfer(_svs.v2361, payable(msg.sender), (_f.v5882.elem0));
      delete _reachm_0[payable(msg.sender)];
      _f.v6271._bal = (safeSub(_svs.v2411, (_f.v5882.elem0)));
      _f.v6271._keepGoing = (_svs.v2373._keepGoing);
      _f.v6271._percent = (_svs.v2373._percent);
      _f.v6271._total_amount_claimed = (safeAdd(_svs.v2409, (_f.v5882.elem0)));
      _f.v6271._total_rewards_allcoated = _svs.v2412;
      _f.v6271._total_users_claim = (safeAdd(_svs.v2408, uint256(1)));
      _f.v6271._usersNo = _svs.v2410;
      T15  memory _ja;
      _ja.elem0 = _svs.v2359;
      _ja.elem1 = _svs.v2360;
      _ja.elem2 = _svs.v2361;
      _ja.elem3 = _f.v6271;
      _ja.elem4 = uint256(block.number);
      _ja.elem5 = (array_set12(_svs.v2376, uint256(0), (T11({elem0: (unsafeSub(_svs.v2414, (_f.v5882.elem0))), elem1: _svs.v2413.elem1, elem2: _svs.v2413.elem2}))));
      _ja.elem6 = _svs.v2377;
      _reachl_1(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T6.User_claimAll0_130) {
    _f.v6511 = __reachm_0Ref(payable(msg.sender));
    _f.v6512 = (_f.v6511.which == _enum_T0.Some ? _f.v6511._Some : uint256(0));
    reachRequire((((uint256(_f.v6511.which)) == uint256(1))), uint256(44) /*'(reach standard library:57:5:application,[at ./token.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:189:29:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "Cannot claim because you have not earned reward")'*/);
    reachRequire(((_f.v6512 <= _svs.v2414)), uint256(45) /*'(reach standard library:57:5:application,[at ./token.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./token.rsh:189:29:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp),at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp),at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)],Just "Cannot claim more than the balance in the contract")'*/);
    reachRequire((msg.value == uint256(0)), uint256(46) /*'(./token.rsh:70:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2361, uint256(0))), uint256(47) /*'(./token.rsh:70:37:dot,[],"verify non-network token pay amount")'*/);
    _f.v6838 = (_svs.v2414 > _f.v6512) ? _f.v6512 : _svs.v2414;
    if ((_f.v6512 >= _svs.v2414)) {
      emit insufficient( _f.v6512);
      emit _reach_oe_v6842( (false));
      _Memory._reachr_User_claimAll = (false);
      _f.v6856._bal = _svs.v2411;
      _f.v6856._keepGoing = (_svs.v2373._keepGoing);
      _f.v6856._percent = (_svs.v2373._percent);
      _f.v6856._total_amount_claimed = _svs.v2409;
      _f.v6856._total_rewards_allcoated = _svs.v2412;
      _f.v6856._total_users_claim = _svs.v2408;
      _f.v6856._usersNo = (safeAdd(_svs.v2410, uint256(1)));
      T15  memory _ja;
      _ja.elem0 = _svs.v2359;
      _ja.elem1 = _svs.v2360;
      _ja.elem2 = _svs.v2361;
      _ja.elem3 = _f.v6856;
      _ja.elem4 = uint256(block.number);
      _ja.elem5 = _svs.v2376;
      _ja.elem6 = _svs.v2377;
      _reachl_1(_ja, _Memory);
      }
    else {
      if (((uint256((__reachm_2Ref(payable(msg.sender))).which)) == uint256(1))) {
        emit _reach_oe_v6892( (true));
        _Memory._reachr_User_claimAll = (true);
        safeTokenTransfer(_svs.v2361, payable(msg.sender), _f.v6838);
        delete _reachm_0[payable(msg.sender)];
        _f.v6917._bal = (safeSub(_svs.v2411, _f.v6838));
        _f.v6917._keepGoing = (_svs.v2373._keepGoing);
        _f.v6917._percent = (_svs.v2373._percent);
        _f.v6917._total_amount_claimed = (safeAdd(_svs.v2409, _f.v6838));
        _f.v6917._total_rewards_allcoated = _svs.v2412;
        _f.v6917._total_users_claim = (safeAdd(_svs.v2408, uint256(1)));
        _f.v6917._usersNo = _svs.v2410;
        T15  memory _ja;
        _ja.elem0 = _svs.v2359;
        _ja.elem1 = _svs.v2360;
        _ja.elem2 = _svs.v2361;
        _ja.elem3 = _f.v6917;
        _ja.elem4 = uint256(block.number);
        _ja.elem5 = (array_set12(_svs.v2376, uint256(0), (T11({elem0: (unsafeSub(_svs.v2414, _f.v6838)), elem1: _svs.v2413.elem1, elem2: _svs.v2413.elem2}))));
        _ja.elem6 = _svs.v2377;
        _reachl_1(_ja, _Memory);
        }
      else {
        emit _reach_oe_v6862( (true));
        _Memory._reachr_User_claimAll = (true);
        _f.v6868.addr = payable(msg.sender);
        _f.v6868.amount = _f.v6838;
        _f.v6868.projectName = _svs.v2360;
        emit claimed( _f.v6868);
        _reachm_2[payable(msg.sender)].which = _enum_T1.Some;
        _reachm_2[payable(msg.sender)]._Some = false;
        
        safeTokenTransfer(_svs.v2361, payable(msg.sender), _f.v6838);
        delete _reachm_0[payable(msg.sender)];
        _f.v6890._bal = (safeSub(_svs.v2411, _f.v6838));
        _f.v6890._keepGoing = (_svs.v2373._keepGoing);
        _f.v6890._percent = (_svs.v2373._percent);
        _f.v6890._total_amount_claimed = (safeAdd(_svs.v2409, _f.v6838));
        _f.v6890._total_rewards_allcoated = _svs.v2412;
        _f.v6890._total_users_claim = (safeAdd(_svs.v2408, uint256(1)));
        _f.v6890._usersNo = (safeAdd(_svs.v2410, uint256(1)));
        T15  memory _ja;
        _ja.elem0 = _svs.v2359;
        _ja.elem1 = _svs.v2360;
        _ja.elem2 = _svs.v2361;
        _ja.elem3 = _f.v6890;
        _ja.elem4 = uint256(block.number);
        _ja.elem5 = (array_set12(_svs.v2376, uint256(0), (T11({elem0: (unsafeSub(_svs.v2414, _f.v6838)), elem1: _svs.v2413.elem1, elem2: _svs.v2413.elem2}))));
        _ja.elem6 = _svs.v2377;
        _reachl_1(_ja, _Memory);
        }
      }
    } else if ((_a.elem1).which == _enum_T6.User_optin0_130) {
    reachRequire((msg.value == uint256(0)), uint256(48) /*'(./token.rsh:70:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2361, uint256(0))), uint256(49) /*'(./token.rsh:70:37:dot,[],"verify non-network token pay amount")'*/);
    _reachm_3[payable(msg.sender)].which = _enum_T1.Some;
    _reachm_3[payable(msg.sender)]._Some = false;
    
    emit _reach_oe_v7448( (false));
    _Memory._reachr_User_optin = (false);
    _f.v7461._bal = _svs.v2411;
    _f.v7461._keepGoing = (_svs.v2373._keepGoing);
    _f.v7461._percent = (_svs.v2373._percent);
    _f.v7461._total_amount_claimed = _svs.v2409;
    _f.v7461._total_rewards_allcoated = _svs.v2412;
    _f.v7461._total_users_claim = _svs.v2408;
    _f.v7461._usersNo = _svs.v2410;
    T15  memory _ja;
    _ja.elem0 = _svs.v2359;
    _ja.elem1 = _svs.v2360;
    _ja.elem2 = _svs.v2361;
    _ja.elem3 = _f.v7461;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = _svs.v2376;
    _ja.elem6 = _svs.v2377;
    _reachl_1(_ja, _Memory);
    }
    }
  function _reachl_1(T15 memory _a, Memory memory _Memory) internal  {
    if ((_a.elem3._keepGoing)) {
      T13 memory nsvs;
      nsvs.v2359 = _a.elem0;
      nsvs.v2360 = _a.elem1;
      nsvs.v2361 = _a.elem2;
      nsvs.v2373 = _a.elem3;
      nsvs.v2376 = _a.elem5;
      nsvs.v2377 = _a.elem6;
      nsvs.v2408 = (_a.elem3._total_users_claim);
      nsvs.v2409 = (_a.elem3._total_amount_claimed);
      nsvs.v2410 = (_a.elem3._usersNo);
      nsvs.v2411 = (_a.elem3._bal);
      nsvs.v2412 = (_a.elem3._total_rewards_allcoated);
      nsvs.v2413 = (_a.elem5[uint256(0)]);
      nsvs.v2414 = ((_a.elem5[uint256(0)]).elem0);
      current_step = uint256(3);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _a.elem0.transfer(_a.elem6);
      safeTokenTransfer(_a.elem2, _a.elem0, ((_a.elem5[uint256(0)]).elem0));
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function Admin_addAdmin(address payable v12235) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_addAdmin(v12235, _Memory);
    return _Memory._reachr_Admin_addAdmin;
    }
  function Admin_deposit(uint256 v12241) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_deposit(v12241, _Memory);
    return _Memory._reachr_Admin_deposit;
    }
  function Admin_editUserReward(address payable v12248, uint256 v12249) external payable returns (bool) {
    Memory memory _Memory;
    T4  memory _ja;
    _ja.elem0 = v12248;
    _ja.elem1 = v12249;
    _reacha_Admin_editUserReward(_ja, _Memory);
    return _Memory._reachr_Admin_editUserReward;
    }
  function Admin_endContractAndTransfer() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Admin_endContractAndTransfer(_ja, _Memory);
    return _Memory._reachr_Admin_endContractAndTransfer;
    }
  function Admin_revokeAdmin(address payable v12259) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_revokeAdmin(v12259, _Memory);
    return _Memory._reachr_Admin_revokeAdmin;
    }
  function Admin_setReward(address payable v12266, uint256 v12267) external payable returns (bool) {
    Memory memory _Memory;
    T4  memory _ja;
    _ja.elem0 = v12266;
    _ja.elem1 = v12267;
    _reacha_Admin_setReward(_ja, _Memory);
    return _Memory._reachr_Admin_setReward;
    }
  function Info_Admins(address payable v12211) external view returns (bool) {
    Memory memory _Memory;
    _reacha_Info_Admins(v12211, _Memory);
    return _Memory._reachr_Info_Admins;
    }
  function Info_balance() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_balance(_ja, _Memory);
    return _Memory._reachr_Info_balance;
    }
  function Info_opted(address payable v12217) external view returns (bool) {
    Memory memory _Memory;
    _reacha_Info_opted(v12217, _Memory);
    return _Memory._reachr_Info_opted;
    }
  function Info_rewards(address payable v12221) external view returns (uint256) {
    Memory memory _Memory;
    _reacha_Info_rewards(v12221, _Memory);
    return _Memory._reachr_Info_rewards;
    }
  function Info_totalAllocatedFunds() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalAllocatedFunds(_ja, _Memory);
    return _Memory._reachr_Info_totalAllocatedFunds;
    }
  function Info_totalAmountClaimed() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalAmountClaimed(_ja, _Memory);
    return _Memory._reachr_Info_totalAmountClaimed;
    }
  function Info_totalClaimed() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalClaimed(_ja, _Memory);
    return _Memory._reachr_Info_totalClaimed;
    }
  function Info_totalOptedIn() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalOptedIn(_ja, _Memory);
    return _Memory._reachr_Info_totalOptedIn;
    }
  function User_claim(uint256 v12273) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_User_claim(v12273, _Memory);
    return _Memory._reachr_User_claim;
    }
  function User_claimAll() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_claimAll(_ja, _Memory);
    return _Memory._reachr_User_claimAll;
    }
  function User_optin() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_optin(_ja, _Memory);
    return _Memory._reachr_User_optin;
    }
  constructor(T14 memory v12284) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v12284, _Memory);
    }
  function _reachp_2(T7 calldata v12287) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_2(v12287, _Memory);
    }
  }
