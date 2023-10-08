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
  bool _Some;
  }
struct T1 {
  uint256 _amountOfRaffleToken;
  uint256 _cost;
  address payable _creator;
  uint256 _deadline;
  bool _isFeatured;
  address payable _raffleToken;
  }
enum _enum_T2 {None, Some}
struct T2 {
  _enum_T2 which;
  bool _None;
  address payable _Some;
  }
struct T4 {
  bool _adminClaimed;
  uint256 _bal;
  uint256 _buyers;
  bool _claimed;
  uint256 _currentUserNumber;
  bool _keepGoing;
  uint256 _percent;
  uint256 _raffleBal;
  T2 _winner;
  }
struct T5 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T7 {
  address payable v3152;
  bool v3153;
  uint256 v3154;
  uint256 v3155;
  uint256 v3156;
  address payable v3158;
  uint256 v3159;
  address payable v3160;
  address payable v3161;
  uint256 v3186;
  T4 v3194;
  uint256 v3198;
  T5[1] v3201;
  uint256 v3202;
  bool v3221;
  uint256 v3231;
  uint256 v3232;
  }
struct T8 {
  uint256 elem0;
  }
struct T9 {
  address payable elem0;
  }
enum _enum_T10 {User_buyTicket0_266, User_claim0_266, User_delete0_266, User_determinWinnerAfterDeadline0_266, User_optin0_266}
struct T10 {
  _enum_T10 which;
  T8 _User_buyTicket0_266;
  bool _User_claim0_266;
  bool _User_delete0_266;
  T9 _User_determinWinnerAfterDeadline0_266;
  bool _User_optin0_266;
  }
struct T11 {
  uint256 elem0;
  T10 elem1;
  }
struct T12 {
  uint256 elem0;
  bool elem1;
  uint256 elem2;
  uint256 elem3;
  uint256 elem4;
  uint256 elem5;
  address payable elem6;
  uint256 elem7;
  address payable elem8;
  address payable elem9;
  }
struct T13 {
  address payable v3152;
  bool v3153;
  uint256 v3154;
  uint256 v3155;
  uint256 v3156;
  uint256 v3157;
  address payable v3158;
  uint256 v3159;
  address payable v3160;
  address payable v3161;
  T5[1] v3166;
  }
struct T14 {
  address payable elem0;
  bool elem1;
  uint256 elem2;
  uint256 elem3;
  uint256 elem4;
  address payable elem5;
  uint256 elem6;
  address payable elem7;
  address payable elem8;
  uint256 elem9;
  T4 elem10;
  uint256 elem11;
  uint256 elem12;
  T5[1] elem13;
  uint256 elem14;
  }
struct T15 {
  address payable _address;
  uint256 _amount;
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
  function array_set6(T5[1] memory arr, uint256 idx, T5 memory val) internal  returns (T5[1] memory arrp) {
    for (uint256 i = 0; i < 1; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T12 _a);
  event _reach_e1(address _who, T8 _a);
  event _reach_e3(address _who, T11 _a);
  event _reach_oe_v3515(bool v0);
  event _reach_oe_v3843(bool v0);
  event _reach_oe_v4140(bool v0);
  event _reach_oe_v4461(bool v0);
  event _reach_oe_v4752(bool v0);
  event bought(T15 v0);
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
  struct Memory {
    bool nil;
    bool _reachr_Info_adminClaimed;
    uint256 _reachr_Info_balance;
    uint256 _reachr_Info_currentSec;
    uint256 _reachr_Info_currentTime;
    bool _reachr_Info_hasDeadlineReached;
    uint256 _reachr_Info_myTicketsAmount;
    bool _reachr_Info_opted;
    T1 _reachr_Info_props;
    uint256 _reachr_Info_randomNumber;
    uint256 _reachr_Info_ticketsBought;
    address payable _reachr_Info_token;
    bool _reachr_Info_userClaimed;
    T2 _reachr_Info_winner;
    bool _reachr_User_buyTicket;
    bool _reachr_User_claim;
    bool _reachr_User_delete;
    bool _reachr_User_determinWinnerAfterDeadline;
    bool _reachr_User_optin;
    }
  function _reacha_Info_adminClaimed(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(7) /*'(./raffle_algo_v4.rsh:47:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_adminClaimed = (_svs.v3194._adminClaimed);
    }
  function _reacha_Info_balance(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(8) /*'(./raffle_algo_v4.rsh:44:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_balance = _svs.v3202;
    }
  function _reacha_Info_currentSec(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(9) /*'(./raffle_algo_v4.rsh:41:15:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_currentSec = _svs.v3186;
    }
  function _reacha_Info_currentTime(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(10) /*'(./raffle_algo_v4.rsh:40:16:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_currentTime = _svs.v3198;
    }
  function _reacha_Info_hasDeadlineReached(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(11) /*'(./raffle_algo_v4.rsh:42:23:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_hasDeadlineReached = _svs.v3221;
    }
  function _reacha_Info_myTicketsAmount(address payable _a, Memory memory _Memory) internal view {
    reachRequire((false), uint256(12) /*'(./raffle_algo_v4.rsh:43:20:property binding,[],Just "Incorrect state: empty blt")'*/);
    }
  function _reacha_Info_opted(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(13) /*'(./raffle_algo_v4.rsh:39:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_opted = ((uint256((__reachm_0Ref((_a))).which)) == uint256(1));
    }
  struct _F6194 {
    T1 v3184;
    }
  function _reacha_Info_props(bool _a, Memory memory _Memory) internal view {
    _F6194 memory _f;
    reachRequire(((current_step == uint256(4))), uint256(14) /*'(./raffle_algo_v4.rsh:49:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _f.v3184._amountOfRaffleToken = _svs.v3159;
    _f.v3184._cost = _svs.v3156;
    _f.v3184._creator = _svs.v3160;
    _f.v3184._deadline = _svs.v3154;
    _f.v3184._isFeatured = _svs.v3153;
    _f.v3184._raffleToken = _svs.v3158;
    _Memory._reachr_Info_props = _f.v3184;
    }
  function _reacha_Info_randomNumber(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(15) /*'(./raffle_algo_v4.rsh:46:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    reachRequire((_svs.v3221), uint256(16) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:147:14:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:146:28:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:146:28:application)],Just "Cannot view this till deadline")'*/);
    _Memory._reachr_Info_randomNumber = _svs.v3155;
    }
  function _reacha_Info_ticketsBought(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(17) /*'(./raffle_algo_v4.rsh:37:18:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_ticketsBought = (_svs.v3194._currentUserNumber);
    }
  function _reacha_Info_token(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(18) /*'(./raffle_algo_v4.rsh:45:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_token = _svs.v3158;
    }
  function _reacha_Info_userClaimed(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(19) /*'(./raffle_algo_v4.rsh:48:16:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_userClaimed = (_svs.v3194._claimed);
    }
  function _reacha_Info_winner(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(20) /*'(./raffle_algo_v4.rsh:38:11:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _Memory._reachr_Info_winner = (_svs.v3194._winner);
    }
  struct _F6200 {
    T8 v6156;
    T10 v6157;
    }
  function _reacha_User_buyTicket(uint256 _a, Memory memory _Memory) internal  {
    _F6200 memory _f;
    _f.v6156.elem0 = _a;
    _f.v6157.which = _enum_T10.User_buyTicket0_266;
    _f.v6157._User_buyTicket0_266 = _f.v6156;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v6157;
    _reachi_3(_ja, _Memory);
    }
  struct _F6201 {
    bool v6161;
    T10 v6162;
    }
  function _reacha_User_claim(bool _a, Memory memory _Memory) internal  {
    _F6201 memory _f;
    _f.v6162.which = _enum_T10.User_claim0_266;
    _f.v6162._User_claim0_266 = _f.v6161;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v6162;
    _reachi_3(_ja, _Memory);
    }
  struct _F6202 {
    bool v6165;
    T10 v6166;
    }
  function _reacha_User_delete(bool _a, Memory memory _Memory) internal  {
    _F6202 memory _f;
    _f.v6166.which = _enum_T10.User_delete0_266;
    _f.v6166._User_delete0_266 = _f.v6165;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v6166;
    _reachi_3(_ja, _Memory);
    }
  struct _F6203 {
    T9 v6170;
    T10 v6171;
    }
  function _reacha_User_determinWinnerAfterDeadline(address payable _a, Memory memory _Memory) internal  {
    _F6203 memory _f;
    _f.v6170.elem0 = _a;
    _f.v6171.which = _enum_T10.User_determinWinnerAfterDeadline0_266;
    _f.v6171._User_determinWinnerAfterDeadline0_266 = _f.v6170;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v6171;
    _reachi_3(_ja, _Memory);
    }
  struct _F6204 {
    bool v6175;
    T10 v6176;
    }
  function _reacha_User_optin(bool _a, Memory memory _Memory) internal  {
    _F6204 memory _f;
    _f.v6176.which = _enum_T10.User_optin0_266;
    _f.v6176._User_optin0_266 = _f.v6175;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v6176;
    _reachi_3(_ja, _Memory);
    }
  struct _F6205 {
    T5 v3132;
    T5[1] v3133;
    }
  function _reachi_0(T12 memory _a, Memory memory _Memory) internal  {
    _F6205 memory _f;
    reachRequire((! locked), uint256(21) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(22) /*'time check at ./raffle_algo_v4.rsh:76:12:dot'*/);
    _f.v3132.elem0 = uint256(0);
    _f.v3132.elem1 = uint256(0);
    _f.v3132.elem2 = false;
    _f.v3133[0] = _f.v3132;
    reachRequire((((_a.elem4) < uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(23) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Cost too large")'*/);
    reachRequire((((_a.elem4) >= uint256(1))), uint256(24) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Cost too small")'*/);
    
    reachRequire((msg.value == uint256(0)), uint256(25) /*'(./raffle_algo_v4.rsh:76:12:dot,[],"verify network token pay amount")'*/);
    T13 memory nsvs;
    nsvs.v3152 = payable(msg.sender);
    nsvs.v3153 = (_a.elem1);
    nsvs.v3154 = (_a.elem2);
    nsvs.v3155 = (_a.elem3);
    nsvs.v3156 = (_a.elem4);
    nsvs.v3157 = (_a.elem5);
    nsvs.v3158 = (_a.elem6);
    nsvs.v3159 = (_a.elem7);
    nsvs.v3160 = (_a.elem8);
    nsvs.v3161 = (_a.elem9);
    nsvs.v3166 = (array_set6(_f.v3133, uint256(0), (T5({elem0: uint256(0), elem1: (_f.v3133[uint256(0)]).elem1, elem2: (_f.v3133[uint256(0)]).elem2}))));
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F6206 {
    T5[1] v3182;
    T2 v3192;
    T4 v3193;
    }
  function _reachi_1(T8 memory _a, Memory memory _Memory) internal  {
    _F6206 memory _f;
    reachRequire((current_step == uint256(1)), uint256(26) /*'state check at ./raffle_algo_v4.rsh:93:12:dot'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    reachRequire((! locked), uint256(27) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(28) /*'time check at ./raffle_algo_v4.rsh:93:12:dot'*/);
    reachRequire((msg.value == _svs.v3157), uint256(29) /*'(./raffle_algo_v4.rsh:93:12:dot,[],"verify network token pay amount")'*/);
    _f.v3182 = array_set6(_svs.v3166, uint256(0), (T5({elem0: (unsafeAdd(((_svs.v3166[uint256(0)]).elem0), _svs.v3159)), elem1: (_svs.v3166[uint256(0)]).elem1, elem2: (_svs.v3166[uint256(0)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v3158, _svs.v3159)), uint256(30) /*'(./raffle_algo_v4.rsh:93:12:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v3152 == payable(msg.sender))), uint256(31) /*'(./raffle_algo_v4.rsh:93:12:dot,[],Just "sender correct")'*/);
    _f.v3192.which = _enum_T2.None;
    _f.v3192._None = false;
    _f.v3193._adminClaimed = false;
    _f.v3193._bal = _svs.v3157;
    _f.v3193._buyers = uint256(0);
    _f.v3193._claimed = false;
    _f.v3193._currentUserNumber = uint256(0);
    _f.v3193._keepGoing = true;
    _f.v3193._percent = uint256(5);
    _f.v3193._raffleBal = ((_f.v3182[uint256(0)]).elem0);
    _f.v3193._winner = _f.v3192;
    T14  memory _ja;
    _ja.elem0 = _svs.v3152;
    _ja.elem1 = _svs.v3153;
    _ja.elem2 = _svs.v3154;
    _ja.elem3 = _svs.v3155;
    _ja.elem4 = _svs.v3156;
    _ja.elem5 = _svs.v3158;
    _ja.elem6 = _svs.v3159;
    _ja.elem7 = _svs.v3160;
    _ja.elem8 = _svs.v3161;
    _ja.elem9 = (safeAdd(uint256(block.timestamp), _svs.v3154));
    _ja.elem10 = _f.v3193;
    _ja.elem11 = uint256(block.number);
    _ja.elem12 = uint256(block.timestamp);
    _ja.elem13 = _f.v3182;
    _ja.elem14 = _svs.v3157;
    _reachl_2(_ja, _Memory);
    }
  struct _F6207 {
    T8 v3413;
    uint256 v3423;
    T15 v3514;
    T4 v3537;
    address payable v3712;
    uint256 v3838;
    uint256 v3842;
    T4 v3859;
    T4 v4166;
    T9 v4220;
    uint256 v4451;
    uint256 v4455;
    uint256 v4460;
    T2 v4478;
    T4 v4479;
    }
  function _reachi_3(T11 memory _a, Memory memory _Memory) internal  {
    _F6207 memory _f;
    reachRequire((current_step == uint256(4)), uint256(32) /*'state check at ./raffle_algo_v4.rsh:120:37:dot'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    reachRequire((! locked), uint256(33) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(34) /*'time check at ./raffle_algo_v4.rsh:120:37:dot'*/);
    if ((_a.elem1).which == _enum_T10.User_buyTicket0_266) {
    _f.v3413 = (_a.elem1)._User_buyTicket0_266;
    reachRequire(((_svs.v3198 < _svs.v3186)), uint256(35) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Deadline reached cannot enter")'*/);
    reachRequire((((_f.v3413.elem0) >= uint256(1))), uint256(36) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:153:50:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:153:50:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Cannot purchase less than 1")'*/);
    _f.v3423 = safeMul((_f.v3413.elem0), _svs.v3156);
    reachRequire((msg.value == _f.v3423), uint256(37) /*'(./raffle_algo_v4.rsh:120:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3158, uint256(0))), uint256(38) /*'(./raffle_algo_v4.rsh:120:37:dot,[],"verify non-network token pay amount")'*/);
    _f.v3514._address = payable(msg.sender);
    _f.v3514._amount = (_f.v3413.elem0);
    emit bought( _f.v3514);
    emit _reach_oe_v3515( (true));
    _Memory._reachr_User_buyTicket = (true);
    _f.v3537._adminClaimed = (_svs.v3194._adminClaimed);
    _f.v3537._bal = (safeAdd(_svs.v3231, _f.v3423));
    _f.v3537._buyers = (safeAdd((_svs.v3194._buyers), uint256(1)));
    _f.v3537._claimed = (_svs.v3194._claimed);
    _f.v3537._currentUserNumber = (safeAdd((_svs.v3194._currentUserNumber), (_f.v3413.elem0)));
    _f.v3537._keepGoing = (_svs.v3194._keepGoing);
    _f.v3537._percent = (_svs.v3194._percent);
    _f.v3537._raffleBal = _svs.v3232;
    _f.v3537._winner = (_svs.v3194._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v3152;
    _ja.elem1 = _svs.v3153;
    _ja.elem2 = _svs.v3154;
    _ja.elem3 = _svs.v3155;
    _ja.elem4 = _svs.v3156;
    _ja.elem5 = _svs.v3158;
    _ja.elem6 = _svs.v3159;
    _ja.elem7 = _svs.v3160;
    _ja.elem8 = _svs.v3161;
    _ja.elem9 = _svs.v3186;
    _ja.elem10 = _f.v3537;
    _ja.elem11 = uint256(block.number);
    _ja.elem12 = uint256(block.timestamp);
    _ja.elem13 = _svs.v3201;
    _ja.elem14 = (unsafeAdd(_svs.v3202, _f.v3423));
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_claim0_266) {
    reachRequire((((uint256((_svs.v3194._winner).which)) == uint256(1))), uint256(39) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Winner has not been determined")'*/);
    reachRequire((_svs.v3221), uint256(40) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Cannot claim yet")'*/);
    reachRequire(((_svs.v3232 <= ((_svs.v3201[uint256(0)]).elem0))), uint256(41) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Error transferring")'*/);
    _f.v3712 = ((_svs.v3194._winner).which == _enum_T2.Some ? (_svs.v3194._winner)._Some : _svs.v3152);
    reachRequire(((_f.v3712 == payable(msg.sender))), uint256(42) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:189:26:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:189:26:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Not winner")'*/);
    reachRequire((msg.value == uint256(0)), uint256(43) /*'(./raffle_algo_v4.rsh:120:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3158, uint256(0))), uint256(44) /*'(./raffle_algo_v4.rsh:120:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((uint256(block.timestamp) >= _svs.v3186)), uint256(45) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:200:13:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:200:13:function exp)],Just "Cannot claim yet")'*/);
    safeTokenTransfer(_svs.v3158, _f.v3712, ((_svs.v3201[uint256(0)]).elem0));
    _f.v3838 = safeSub(_svs.v3231, (safeDiv((safeMul(_svs.v3202, uint256(5))), uint256(100))));
    _f.v3842 = unsafeSub(_svs.v3202, _f.v3838);
    _svs.v3152.transfer(_f.v3838);
    emit _reach_oe_v3843( (true));
    _Memory._reachr_User_claim = (true);
    _f.v3859._adminClaimed = true;
    _f.v3859._bal = _f.v3842;
    _f.v3859._buyers = (_svs.v3194._buyers);
    _f.v3859._claimed = true;
    _f.v3859._currentUserNumber = (_svs.v3194._currentUserNumber);
    _f.v3859._keepGoing = false;
    _f.v3859._percent = (_svs.v3194._percent);
    _f.v3859._raffleBal = uint256(0);
    _f.v3859._winner = (_svs.v3194._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v3152;
    _ja.elem1 = _svs.v3153;
    _ja.elem2 = _svs.v3154;
    _ja.elem3 = _svs.v3155;
    _ja.elem4 = _svs.v3156;
    _ja.elem5 = _svs.v3158;
    _ja.elem6 = _svs.v3159;
    _ja.elem7 = _svs.v3160;
    _ja.elem8 = _svs.v3161;
    _ja.elem9 = _svs.v3186;
    _ja.elem10 = _f.v3859;
    _ja.elem11 = uint256(block.number);
    _ja.elem12 = uint256(block.timestamp);
    _ja.elem13 = (array_set6(_svs.v3201, uint256(0), (T5({elem0: (unsafeSub(((_svs.v3201[uint256(0)]).elem0), ((_svs.v3201[uint256(0)]).elem0))), elem1: (_svs.v3201[uint256(0)]).elem1, elem2: (_svs.v3201[uint256(0)]).elem2}))));
    _ja.elem14 = _f.v3842;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_delete0_266) {
    reachRequire((((payable(msg.sender) == _svs.v3152) ? true : (payable(msg.sender) == _svs.v3161))), uint256(46) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Don't have administrative rights to perform action")'*/);
    reachRequire((_svs.v3221), uint256(47) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Impossibe command, seeing as the deadline has not reached")'*/);
    reachRequire((((_svs.v3194._currentUserNumber) == uint256(0))), uint256(48) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:268:27:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:268:27:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Can only delete when nobody used contract")'*/);
    reachRequire((msg.value == uint256(0)), uint256(49) /*'(./raffle_algo_v4.rsh:120:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3158, uint256(0))), uint256(50) /*'(./raffle_algo_v4.rsh:120:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v4140( (true));
    _Memory._reachr_User_delete = (true);
    safeTokenTransfer(_svs.v3158, _svs.v3152, ((_svs.v3201[uint256(0)]).elem0));
    _f.v4166._adminClaimed = (_svs.v3194._adminClaimed);
    _f.v4166._bal = _svs.v3231;
    _f.v4166._buyers = (_svs.v3194._buyers);
    _f.v4166._claimed = true;
    _f.v4166._currentUserNumber = (_svs.v3194._currentUserNumber);
    _f.v4166._keepGoing = false;
    _f.v4166._percent = (_svs.v3194._percent);
    _f.v4166._raffleBal = _svs.v3232;
    _f.v4166._winner = (_svs.v3194._winner);
    T14  memory _ja;
    _ja.elem0 = _svs.v3152;
    _ja.elem1 = _svs.v3153;
    _ja.elem2 = _svs.v3154;
    _ja.elem3 = _svs.v3155;
    _ja.elem4 = _svs.v3156;
    _ja.elem5 = _svs.v3158;
    _ja.elem6 = _svs.v3159;
    _ja.elem7 = _svs.v3160;
    _ja.elem8 = _svs.v3161;
    _ja.elem9 = _svs.v3186;
    _ja.elem10 = _f.v4166;
    _ja.elem11 = uint256(block.number);
    _ja.elem12 = uint256(block.timestamp);
    _ja.elem13 = (array_set6(_svs.v3201, uint256(0), (T5({elem0: (unsafeSub(((_svs.v3201[uint256(0)]).elem0), ((_svs.v3201[uint256(0)]).elem0))), elem1: (_svs.v3201[uint256(0)]).elem1, elem2: (_svs.v3201[uint256(0)]).elem2}))));
    _ja.elem14 = _svs.v3202;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_determinWinnerAfterDeadline0_266) {
    _f.v4220 = (_a.elem1)._User_determinWinnerAfterDeadline0_266;
    reachRequire((((uint256((_svs.v3194._winner).which)) == uint256(0))), uint256(51) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Winner has not been determined")'*/);
    reachRequire((_svs.v3221), uint256(52) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "Impossibe command, seeing as the deadline has not reached")'*/);
    reachRequire(((payable(msg.sender) == _svs.v3161)), uint256(53) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:217:54:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:217:54:function exp),at ./raffle_algo_v4.rsh:120:37:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:120:37:function exp),at ./raffle_algo_v4.rsh:134:14:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:134:14:function exp)],Just "You cannot perform this action")'*/);
    reachRequire((msg.value == uint256(0)), uint256(54) /*'(./raffle_algo_v4.rsh:120:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3158, uint256(0))), uint256(55) /*'(./raffle_algo_v4.rsh:120:37:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((uint256(block.timestamp) >= _svs.v3186)), uint256(56) /*'(reach standard library:57:5:application,[at ./raffle_algo_v4.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./raffle_algo_v4.rsh:228:13:application call to [unknown function] (defined at: ./raffle_algo_v4.rsh:228:13:function exp)],Just "Impossibe command, seeing as the deadline has not reached")'*/);
    _f.v4451 = safeDiv((safeMul(_svs.v3202, uint256(5))), uint256(100));
    _f.v4455 = unsafeSub(_svs.v3202, _f.v4451);
    _svs.v3161.transfer(_f.v4451);
    _f.v4460 = unsafeSub(_f.v4455, _f.v4455);
    _svs.v3152.transfer(_f.v4455);
    emit _reach_oe_v4461( (false));
    _Memory._reachr_User_determinWinnerAfterDeadline = (false);
    _f.v4478.which = _enum_T2.Some;
    _f.v4478._Some = (_f.v4220.elem0);
    _f.v4479._adminClaimed = true;
    _f.v4479._bal = _f.v4460;
    _f.v4479._buyers = (_svs.v3194._buyers);
    _f.v4479._claimed = (_svs.v3194._claimed);
    _f.v4479._currentUserNumber = (_svs.v3194._currentUserNumber);
    _f.v4479._keepGoing = (_svs.v3194._keepGoing);
    _f.v4479._percent = (_svs.v3194._percent);
    _f.v4479._raffleBal = _svs.v3232;
    _f.v4479._winner = _f.v4478;
    T14  memory _ja;
    _ja.elem0 = _svs.v3152;
    _ja.elem1 = _svs.v3153;
    _ja.elem2 = _svs.v3154;
    _ja.elem3 = _svs.v3155;
    _ja.elem4 = _svs.v3156;
    _ja.elem5 = _svs.v3158;
    _ja.elem6 = _svs.v3159;
    _ja.elem7 = _svs.v3160;
    _ja.elem8 = _svs.v3161;
    _ja.elem9 = _svs.v3186;
    _ja.elem10 = _f.v4479;
    _ja.elem11 = uint256(block.number);
    _ja.elem12 = uint256(block.timestamp);
    _ja.elem13 = _svs.v3201;
    _ja.elem14 = _f.v4460;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.User_optin0_266) {
    reachRequire((msg.value == uint256(0)), uint256(57) /*'(./raffle_algo_v4.rsh:120:37:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v3158, uint256(0))), uint256(58) /*'(./raffle_algo_v4.rsh:120:37:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v4752( (false));
    _Memory._reachr_User_optin = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v3152;
    _ja.elem1 = _svs.v3153;
    _ja.elem2 = _svs.v3154;
    _ja.elem3 = _svs.v3155;
    _ja.elem4 = _svs.v3156;
    _ja.elem5 = _svs.v3158;
    _ja.elem6 = _svs.v3159;
    _ja.elem7 = _svs.v3160;
    _ja.elem8 = _svs.v3161;
    _ja.elem9 = _svs.v3186;
    _ja.elem10 = _svs.v3194;
    _ja.elem11 = uint256(block.number);
    _ja.elem12 = uint256(block.timestamp);
    _ja.elem13 = _svs.v3201;
    _ja.elem14 = _svs.v3202;
    _reachl_2(_ja, _Memory);
    }
    }
  function _reachl_2(T14 memory _a, Memory memory _Memory) internal  {
    if (((_a.elem10._keepGoing) ? ((_a.elem10._claimed) ? false : true) : false)) {
      T7 memory nsvs;
      nsvs.v3152 = _a.elem0;
      nsvs.v3153 = _a.elem1;
      nsvs.v3154 = _a.elem2;
      nsvs.v3155 = _a.elem3;
      nsvs.v3156 = _a.elem4;
      nsvs.v3158 = _a.elem5;
      nsvs.v3159 = _a.elem6;
      nsvs.v3160 = _a.elem7;
      nsvs.v3161 = _a.elem8;
      nsvs.v3186 = _a.elem9;
      nsvs.v3194 = _a.elem10;
      nsvs.v3198 = _a.elem12;
      nsvs.v3201 = _a.elem13;
      nsvs.v3202 = _a.elem14;
      nsvs.v3221 = (_a.elem12 >= _a.elem9);
      nsvs.v3231 = (_a.elem10._bal);
      nsvs.v3232 = (_a.elem10._raffleBal);
      current_step = uint256(4);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _a.elem8.transfer(_a.elem14);
      safeTokenTransfer(_a.elem5, _a.elem0, ((_a.elem13[uint256(0)]).elem0));
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function Info_adminClaimed() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_adminClaimed(_ja, _Memory);
    return _Memory._reachr_Info_adminClaimed;
    }
  function Info_balance() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_balance(_ja, _Memory);
    return _Memory._reachr_Info_balance;
    }
  function Info_currentSec() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_currentSec(_ja, _Memory);
    return _Memory._reachr_Info_currentSec;
    }
  function Info_currentTime() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_currentTime(_ja, _Memory);
    return _Memory._reachr_Info_currentTime;
    }
  function Info_hasDeadlineReached() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_hasDeadlineReached(_ja, _Memory);
    return _Memory._reachr_Info_hasDeadlineReached;
    }
  function Info_myTicketsAmount(address payable v6137) external view returns (uint256) {
    Memory memory _Memory;
    _reacha_Info_myTicketsAmount(v6137, _Memory);
    return _Memory._reachr_Info_myTicketsAmount;
    }
  function Info_opted(address payable v6141) external view returns (bool) {
    Memory memory _Memory;
    _reacha_Info_opted(v6141, _Memory);
    return _Memory._reachr_Info_opted;
    }
  function Info_props() external view returns (T1 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_props(_ja, _Memory);
    return _Memory._reachr_Info_props;
    }
  function Info_randomNumber() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_randomNumber(_ja, _Memory);
    return _Memory._reachr_Info_randomNumber;
    }
  function Info_ticketsBought() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_ticketsBought(_ja, _Memory);
    return _Memory._reachr_Info_ticketsBought;
    }
  function Info_token() external view returns (address payable) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_token(_ja, _Memory);
    return _Memory._reachr_Info_token;
    }
  function Info_userClaimed() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_userClaimed(_ja, _Memory);
    return _Memory._reachr_Info_userClaimed;
    }
  function Info_winner() external view returns (T2 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_winner(_ja, _Memory);
    return _Memory._reachr_Info_winner;
    }
  function User_buyTicket(uint256 v6159) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_User_buyTicket(v6159, _Memory);
    return _Memory._reachr_User_buyTicket;
    }
  function User_claim() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_claim(_ja, _Memory);
    return _Memory._reachr_User_claim;
    }
  function User_delete() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_delete(_ja, _Memory);
    return _Memory._reachr_User_delete;
    }
  function User_determinWinnerAfterDeadline(address payable v6173) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_User_determinWinnerAfterDeadline(v6173, _Memory);
    return _Memory._reachr_User_determinWinnerAfterDeadline;
    }
  function User_optin() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_optin(_ja, _Memory);
    return _Memory._reachr_User_optin;
    }
  constructor(T12 memory v6180) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v6180, _Memory);
    }
  function _reachp_1(T8 calldata v6183) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v6183, _Memory);
    }
  function _reachp_3(T11 calldata v6186) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v6186, _Memory);
    }
  }
